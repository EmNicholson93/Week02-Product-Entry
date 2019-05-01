import productApi from '../src/product-api.js';

const test = QUnit.test;
QUnit.module('product api');

test('round trip the product app data', assert => {
    localStorage.removeItem('products');
    //arrange
    const product = { name: 'seal' };
    //act
    productApi.save(product);
    const result = productApi.get();
    //assert
    assert.deepEqual(result, product);
});

test('return an empty array if there are no products', assert => {
    //arrange
    localStorage.removeItem('products');
    const expected = [];
    //act
    const products = productApi.getAll();
    //assert
    assert.deepEqual(products, expected);
});