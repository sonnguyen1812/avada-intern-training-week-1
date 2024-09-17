import fetch from 'node-fetch';
import * as fs from 'fs';

// Sử dụng async IIFE để fetch tất cả dữ liệu
const fetchAllData = (async () => {
  try {
    // Gọi tất cả các API cùng lúc với Promise.all
    const [users, posts, comments] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()),
    ]);

    // Lưu dữ liệu ra file
    fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));
    fs.writeFileSync('./data/posts.json', JSON.stringify(posts, null, 2));
    fs.writeFileSync('./data/comments.json', JSON.stringify(comments, null, 2));

    // Trả về kết quả
    return { users, posts, comments };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();

// Map posts và comments vào users
async function mapPostsAndCommentsToUsers() {
  const { users, posts, comments } = await fetchAllData;

  const usersWithPostsAndComments = users.map(user => {
    const userPosts = posts.filter(post => post.userId === user.id);
    const userComments = comments.filter(comment =>
        userPosts.some(post => post.id === comment.postId)
    );

    return {
      ...user,
      posts: userPosts,
      comments: userComments
    };
  });

  fs.writeFileSync('./data/users_with_posts_comments.json', JSON.stringify(usersWithPostsAndComments, null, 2));
  return usersWithPostsAndComments;
}

// Filter only users with more than 3 comments
async function filterUsersWithMoreThanThreeComments() {
  const usersWithPostsAndComments = await mapPostsAndCommentsToUsers();
  const filteredUsers = usersWithPostsAndComments.filter(user => user.comments.length > 3);

  fs.writeFileSync('./data/filtered_users.json', JSON.stringify(filteredUsers, null, 2));
  return filteredUsers;
}

// Reformat the data with counts of comments and posts
async function reformatUsersWithCounts() {
  const filteredUsers = await filterUsersWithMoreThanThreeComments();
  const reformattedUsers = filteredUsers.map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    commentsCount: user.comments.length,
    postsCount: user.posts.length
  }));

  fs.writeFileSync('./data/reformatted_users.json', JSON.stringify(reformattedUsers, null, 2));
  return reformattedUsers;
}

// Find user with most comments and posts
async function findUserWithMostCommentsAndPosts() {
  const reformattedUsers = await reformatUsersWithCounts();

  const userWithMostComments = reformattedUsers.reduce((max, user) =>
      user.commentsCount > max.commentsCount ? user : max, reformattedUsers[0]);

  const userWithMostPosts = reformattedUsers.reduce((max, user) =>
      user.postsCount > max.postsCount ? user : max, reformattedUsers[0]);

  const result = {
    userWithMostComments,
    userWithMostPosts
  };

  fs.writeFileSync('./data/user_with_most_comments_posts.json', JSON.stringify(result, null, 2));

  return result;
}

// Sort users by postsCount descending
async function sortUsersByPostsCount() {
  const reformattedUsers = await reformatUsersWithCounts();
  const sortedUsers = reformattedUsers.sort((a, b) => b.postsCount - a.postsCount);

  fs.writeFileSync('./data/sorted_users.json', JSON.stringify(sortedUsers, null, 2));
  return sortedUsers;
}

// Get post with ID of 1 and merge it with comments
async function getPostWithComments(postId) {
  // Gọi API cho post và comments cùng lúc
  const [post, comments] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json()),
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(res => res.json())
  ]);

  const mergedPost = {
    ...post,
    comments
  };

  fs.writeFileSync('./data/post_with_comments.json', JSON.stringify(mergedPost, null, 2));
  return mergedPost;
}

// Execute all the functions
(async () => {
  await mapPostsAndCommentsToUsers();
  await filterUsersWithMoreThanThreeComments();
  await reformatUsersWithCounts();
  await findUserWithMostCommentsAndPosts();
  await sortUsersByPostsCount();
  await getPostWithComments(1);
})();
