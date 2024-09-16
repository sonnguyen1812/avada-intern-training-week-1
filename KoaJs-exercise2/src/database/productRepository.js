const fs = require('fs');
const products = require('./products.json').data;

function getAll() {
  return products;
}

function getOne(id) {
  return products.find(product => product.id === parseInt(id));
}

function add(data) {
  products.push(data);
  fs.writeFileSync('./src/database/products.json', JSON.stringify({ data: products }, null, 2));
}

function update(id, newData) {
  const index = products.findIndex(product => product.id === parseInt(id));
  if (index !== -1) {
    products[index] = { ...products[index], ...newData };
    fs.writeFileSync('./src/database/products.json', JSON.stringify({ data: products }, null, 2));
  }
}

function remove(id) {
  const updatedProducts = products.filter(product => product.id !== parseInt(id));
  fs.writeFileSync('./src/database/products.json', JSON.stringify({ data: updatedProducts }, null, 2));
}

module.exports = { getAll, getOne, add, update, remove };
