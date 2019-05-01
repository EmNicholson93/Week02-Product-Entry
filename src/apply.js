import productApp from './product-app.js';
import productApi from './product-api.js';
const form = document.getElementById('onesie-design');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const product = productApp(formData);
    console.log(productApp(formData));
    productApi.save(product);
});
