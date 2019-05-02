const productApi = {
    storage: localStorage,
    save(product) {
        const products = productApi.getAll();
        products.push(product);
        const json = JSON.stringify(products);
        productApi.storage.setItem('products', json);
    },
    get() {
        const json = productApi.storage.getItem('products');
        const products = JSON.parse(json);

        return products[0];
    },
    getAll() {
        const json = productApi.storage.getItem('products');

        let products = JSON.parse(json);
        if(!products) {
            products = [];
        }

        return products;
    }
};

export default productApi;