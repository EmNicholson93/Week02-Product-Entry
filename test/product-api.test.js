import productApi from '../src/product-api.js';

const test = QUnit.test;
QUnit.module('product api');

productApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round trip the product app data', assert => {
    testStorage.removeItem('products');
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
    testStorage.removeItem('products');
    const expected = [];
    //act
    const products = productApi.getAll();
    //assert
    assert.deepEqual(products, expected);
});

test('if 2 products are added getAll returns array of products', assert => {
    //arrange
    testStorage.removeItem('products');
    const product1 = { name: 'Lion' };
    const product2 = { name: 'Seal' };
    productApi.save(product1);
    productApi.save(product2);
    const expected = [product1, product2];
    //act
    const products = productApi.getAll();
    //assert
    assert.deepEqual(products, expected);
});