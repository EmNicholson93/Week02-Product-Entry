const productApi = {
    save(product) {
        const json = JSON.stringify(product);
        localStorage.setItem('product', json);
    },
    get() {
        const json = localStorage.getItem('product');
        const product = JSON.parse(json);

        return product;
    }
};

export default productApi;