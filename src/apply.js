import productApp from './product-app.js';
const form = document.getElementById('onesie-design');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(productApp(formData));
});
