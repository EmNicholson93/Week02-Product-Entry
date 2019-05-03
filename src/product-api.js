const productApi = {
    key: 'products',
    save(product) {
        const products = productApi.getAll();
        products.push(product);
        const json = JSON.stringify(products);
        localStorage.setItem(productApi.key, json);
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
        const json = localStorage.getItem(productApi.key);

        let products = JSON.parse(json);
        if(!products) {
            products = [];
        }

        return products;
    }
};

export default productApi;