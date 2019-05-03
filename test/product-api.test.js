import productApi from '../src/product-api.js';

const test = QUnit.test;
QUnit.module('product api');

productApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('store 2 products and return the second one', assert => {
    testStorage.removeItem('products');
    //arrange
    const product1 = { name: 'product1' };
    const product2 = { name: 'product2' };
    //act
    productApi.save(product1);
    productApi.save(product2);
    const result = productApi.get(product2.name);
    //assert
    assert.deepEqual(result, product2);
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