const express = require('express');
const fetch = require('node-fetch');
const axios = require('axios');
const app = express();

const BASE_URL = 'https://test-server.com/api';

const COMPANIES = {
    AMZ: 'Amazon',
    FLP: 'Flipkart',
    SNP: 'Snapdeal',
    MYN: 'Myntra',
    AZO: 'AZO',
};

const CATEGORIES = [
    'Phone',
    'Computer',
    'TV',
    'Earphone',
    'Tablet',
    'Charger',
    'Mouse',
    'Keypad',
    'Bluetooth',
    'Pendrive',
    'Remote',
    'Speaker',
    'Headset',
    'Laptop',
    'PC',
];

const fetchProducts = async (company, category, minPrice, maxPrice) => {
  const url = `https://test-server.com/api/products?company=${company}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  const response = await axios.get(url);
  return response.data;
};


app.get('/categories/:categoryname/products', getProductsHandler);
app.get('/categories/:categoryname/products/:productid', getProductDetailsHandler);

app.listen(9876, () => {
    console.log("Server live on port 9876");
});