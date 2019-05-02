const productApi = {
    save(product) {
        const products = productApi.getAll();
        products.push(product);
        const json = JSON.stringify(products);
        localStorage.setItem('products', json);
    },
    get() {
        const json = localStorage.getItem('products');
        const products = JSON.parse(json);

        return products[0];
    },
    getAll() {
        const json = localStorage.getItem('products');

        let products = JSON.parse(json);
        if(!products) {
            products = [];
        }

        return products;
    }
};

export default productApi;