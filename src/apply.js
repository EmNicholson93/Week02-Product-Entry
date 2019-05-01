import getProduct from './get-product.js';
import productApi from './product-api.js';
const form = document.getElementById('onesie-design');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const product = getProduct(formData);
    productApi.save(product);
});
