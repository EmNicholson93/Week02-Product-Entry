function getProduct(formData) {
    const hood = formData.get('hooded') === 'no';
    const soft = parseInt(formData.get('softness'));

    const product = {
        name: formData.get('name'),
        description: formData.get('description'),
        color: formData.get('color'),
        category: formData.get('category'),
        softness: soft,
        hooded: hood,
        descriptors: formData.getAll('descriptors'),
    };
    return product;
}

export default getProduct;
