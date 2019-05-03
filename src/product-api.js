const productApi = {
    storage: localStorage,
    save(product) {
        const products = productApi.getAll();
        products.push(product);
        const json = JSON.stringify(products);
        productApi.storage.setItem('products', json);
    },
    get(name) {
        const products = productApi.getAll();

        for(let i = 0; i < products.length; i++) {
            const product = products[i];
            if(product.name === name) {
                return product;
            }
        }
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