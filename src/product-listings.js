import productApi from './product-api.js';

const tbody = document.getElementById('products');
const products = productApi.getAll();

for(let i = 0; i < products.length; i++) {
    const product = products[i];
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', product.name);
    link.href = 'product-details.html?' + searchParams.toString();
    link.textContent = product.name;
    nameCell.appendChild(nameCell);
    tr.appendChild(nameCell);

    const colorCell = document.createElement('td');
    colorCell.textContent = product.color;
    tr.appendChild(colorCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = product.description;
    tr.appendChild(descriptionCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = product.category;
    tr.appendChild(categoryCell);

    const softnessCell = document.createElement('td');
    softnessCell.textContent = product.softness;
    tr.appendChild(softnessCell);

    const hoodedCell = document.createElement('td');
    if(product.hooded) {
        hoodedCell.textContent = 'Yes';
    } 
    else {
        hoodedCell.textContent = 'No';
    }
    tr.appendChild(hoodedCell);

    const descriptorsCell = document.createElement('td');
    let descriptorsList = '';
    if(product.descriptors) {
        descriptorsList = product.descriptors.join(', ');
    }
    descriptorsCell.textContent = descriptorsList;
    tr.appendChild(descriptorsCell);

    tbody.appendChild(tr);
}