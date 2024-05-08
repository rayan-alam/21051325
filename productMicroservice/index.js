const express = require('express');
const fetch = require('node-fetch');
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



app.listen(9876, () => {
    console.log("Server live on port 9876");
});