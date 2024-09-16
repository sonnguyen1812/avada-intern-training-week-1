// Thực thi tuần tự
/*const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const promise1 = async () => {
  await delay(1000); // Chờ 1 giây
  console.log("Promise 1 executed");
};

const promise2 = async () => {
  await delay(3000); // Chờ 3 giây
  console.log("Promise 2 executed");
};

// Controller
(async () => {
  try {
    const start = new Date();
    await promise1(); // Thực thi promise1 xong mới đến promise2
    await promise2();
    const end = new Date() - start;
    console.info("Execution time: %dms", end); // Kết quả: Execution time: khoảng 4000ms
  } catch (e) {
    console.log("Got an error here");
  }
})();*/

// Thực thi song song
/*const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const promise1 = async () => {
  await delay(1000); // Chờ 1 giây
  console.log("Promise 1 executed");
};

const promise2 = async () => {
  await delay(3000); // Chờ 3 giây
  console.log("Promise 2 executed");
};

// Controller
(async () => {
  try {
    const start = new Date();
    await Promise.all([promise1(), promise2()]); // Thực thi song song
    const end = new Date() - start;
    console.info("Execution time: %dms", end); // Kết quả: Execution time: khoảng 3000ms
  } catch (e) {
    console.log("Got an error here");
  }
})();*/

//Async/Await
// Lập trình bất đồng bộ với Callbacks
/**
 * Here is a glimpse into how async programming used to work with callback
 *
 * @param callback
 */
/*function getData(callback) {
  setTimeout(() => {
    const data = [
      { id: 1, name: "Developer A" },
      { id: 2, name: "Developer B" },
    ]; // Giả sử là dữ liệu từ API

    callback(data);
  }, 1000);
}

getData((data) => {
  const names = data.map((item) => item.name);
  console.log(names); // ["Developer A", "Developer B"]
});*/

//Callback Hell
/**
 * @description This is a example with 3 layer callback hell
 */

/**
 * Fake like we getting data from API which takes 1s
 *
 * @param callback
 */
/*function getData(callback) {
  setTimeout(() => {
    const data = [
      { id: 1, name: "Developer A" },
      { id: 2, name: "Devloper B" },
    ]; // Assume the data from API

    callback(data);
  }, 1000);
}*/

/**
 * Fake like we are submitting the data to an API elsewhere
 *
 * @param inputData
 * @param callback
 */
/*function submitData(inputData, callback) {
  console.log("starting to submit");
  setTimeout(() => {
    // Act like we submit the inputData to the server and takes 1s
    const status = randomStatus();
    callback({
      success: status,
    });
  }, 1000);
}*/

/**
 * Just a helper random the result of the submit: success or failed
 *
 * @returns {boolean}
 */
/*const randomStatus = () => [true, false][Math.floor(Math.random() * 2)];

// Main body of the example
getData((data) => {
  const names = data.map((data) => data.name);
  console.log(names);
  submitData(names, (response) => {
    const { success } = response;
    if (success === true) {
      console.log("This is a successful form");
    } else {
      console.log("This is a failed form");
    }
  });
});*/

/**
 * @conclusion
 *
 * Just imagine that after submit the form,
 * we continue to do more async processes
 * and the code keeps on being nested
 *
 * @see See this link for closer look at callback hell
 * @link http://callbackhell.com/
 *
 */

//Lập trình bất đồng bộ với Promise
/**
 * Asynchronous programming with Promise
 */
/*function getData() {
  return new Promise((resolve, reject) => {
    const data = [
      { id: 1, name: "Developer A" },
      { id: 2, name: "Devloper B" },
    ];

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}*/

/**
 * Fake like we are submitting the data to an API elsewhere
 *
 * @param inputData
 */
/*function submitData(inputData) {
  console.log("starting to submit");

  return new Promise((resolve, reject) => {
    // Act like we submit the inputData to the server and takes 1s
    const status = randomStatus();

    setTimeout(() => {
      resolve({
        success: status,
      });
    }, 1000);
  });
}*/

/**
 * Just a helper random the result of the submit: success or failed
 *
 * @returns {boolean}
 */
/*const randomStatus = () => [true, false][Math.floor(Math.random() * 2)];

// Main body of the example
getData().then((data) => {
  const names = data.map((data) => data.name);
  console.log(names);
  submitData(names).then((response) => {
    const { success } = response;
    if (success === true) {
      console.log("This is a successful form");
    } else {
      console.log("This is a failed form");
    }
  });
});*/

//Lập trình bất đồng bộ với async/await
/*function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { id: 1, name: "Developer A" },
        { id: 2, name: "Developer B" },
      ];
      resolve(data);
    }, 1000);
  });
}

function submitData(inputData) {
  console.log("starting to submit");
  return new Promise((resolve, reject) => {
    const status = randomStatus();
    setTimeout(() => {
      resolve({ success: status });
    }, 1000);
  });
}

const randomStatus = () => [true, false][Math.floor(Math.random() * 2)];

// Sử dụng async/await
(async () => {
  try {
    const data = await getData();
    const names = data.map((item) => item.name);
    console.log(names);

    const { success } = await submitData(names);
    if (success) {
      console.log("This is a successful form");
    } else {
      console.log("This is a failed form");
    }
  } catch (error) {
    console.log("Error:", error);
  }
})();*/
