import productApi from './product-api.js';

const name = document.getElementById('name');
const color = document.getElementById('color');
const description = document.getElementById('description');
const category = document.getElementById('category');
const softness = document.getElementById('softness');
const hooded = document.getElementById('hooded');
const descriptors = document.getElementById('descriptors');

const searchParams = new URLSearchParams(window.location.search);
const productName = searchParams.get('name');

const product = productApi.get(productName);

// if(!product) {
//     window.location = './';
// }

name.textContent = product.name;
color.textContent = product.color;
description.textContent = product.description;
category.textContent = product.category;
softness.textContent = product.softness;

if(product.hooded) {
    hooded.textContent = 'Yes';
} else {
    hooded.textContent = 'No';
}

descriptors.textContent = product.descriptors.join(', ');
