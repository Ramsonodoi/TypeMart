"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = 'fanny pack';
const product = products_1.default.filter(product => product.name === productName)[0];
console.log(product);
