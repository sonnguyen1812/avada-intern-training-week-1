const fs = require('fs');
const faker = require('faker');

const generateProducts = (num) => {
  const products = [];
  for (let i = 1; i <= num; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      product: faker.commerce.product(),
      color: faker.commerce.color(),
      createdAt: faker.date.past(),
      image: faker.image.imageUrl()
    });
  }
  return products;
};

const products = generateProducts(1000);
fs.writeFileSync('./src/database/products.json', JSON.stringify({ data: products }));
