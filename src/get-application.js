function getApplicantion(formData) {
    const hood = formData.get('hooded') === 'no';
    const soft = parseInt(formData.get('softness'));

    const application = {
        name: formData.get('name'),
        description: formData.get('description'),
        color: formData.get('color'),
        category: formData.get('category'),
        softness: soft,
        hooded: hood,
        descriptors: formData.getAll('descriptors'),
    };
    return application;
}

export default getApplicantion;
