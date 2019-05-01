const productApi = {
    save(products) {
        const json = JSON.stringify(products);
        localStorage.setItem('products', json);
    },
    get() {
        const json = localStorage.getItem('products');
        const products = JSON.parse(json);

        return products;
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