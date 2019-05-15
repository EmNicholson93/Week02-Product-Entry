import productApi from '../src/product-api.js';

const key = 'test-products';
productApi.key = key;

const test = QUnit.test;
QUnit.module('product api');

test('store 2 products and return the second one', assert => {
    localStorage.removeItem(key);
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
    localStorage.removeItem(key);
    const expected = [];
    //act
    const products = productApi.getAll();
    //assert
    assert.deepEqual(products, expected);
});

test('if 2 products are added getAll returns array of products', assert => {
    //arrange
    localStorage.removeItem(key);
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