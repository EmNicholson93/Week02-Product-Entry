import productApi from './product-api.js';
import productRow from './product-row.js';

const tbody = document.getElementById('products');
const products = productApi.getAll();

for(let i = 0; i < products.length; i++) {
    const product = products[i];
    const tr = document.createElement('tr');

    const nameCell = productRow.makeNameCell(product.name);
    const colorCell = productRow.makeTextCell(product.color);
    const descriptionCell = productRow.makeTextCell(product.description);
    const categoryCell = productRow.makeTextCell(product.category);
    const softnessCell = productRow.makeTextCell(product.softness);
    const hoodedCell = productRow.makeTextCell(productRow.boolConversion(product.hooded));
    const descriptorsCell = products.makeListCell(productRow.descriptors);
    
    tr.appendChild(nameCell);
    tr.appendChild(colorCell);
    tr.appendChild(descriptionCell);
    tr.appendChild(categoryCell);
    tr.appendChild(softnessCell);
    tr.appendChild(hoodedCell);
    tr.appendChild(descriptorsCell);

    tbody.appendChild(tr);
}