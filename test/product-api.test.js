import productApi from '../src/product-api.js';

const test = QUnit.test;
QUnit.module('product api');

test('round trip the product app data', assert => {
    //arrange
    const product = { name: 'seal' };
    //act
    productApi.save(product);
    const result = productApi.get();
    //assert
    assert.deepEqual(result, product);
});