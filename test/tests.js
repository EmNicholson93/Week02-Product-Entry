import productApp from '../src/product-app.js';
const test = QUnit.test;

test('Test ability to test for a function', assert => {
//arrange
    const expected = {
        name: 'seal',
        description: 'Its a seal',
        color: 'grey',
        category: 'Fleece',
        softness: 4,
        hooded: true,
        descriptors: ['tail', 'zipper'],
        
    };
//act
    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('description', expected.description);
    formData.set('color', expected.color);
    formData.set('category', expected.category);
    formData.set('softness', '4');
    formData.set('hooded', 'no');
    formData.set('descriptors', expected.descriptors[0]);
    formData.append('descriptors', expected.descriptors[1]);
    

    const result = productApp(formData);
//assert
    assert.deepEqual(result, expected);

});
