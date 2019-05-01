import applicantApi from './applicant-api.js';

const name = document.getElementById('name');
const color = document.getElementById('color');
const description = document.getElementById('description');
const category = document.getElementById('category');
const softness = document.getElementById('softness');
const hooded = document.getElementById('hooded');
const descriptors = document.getElementById('descriptors');

const applicant = applicantApi.get();

// if(!applicant) {
//     window.location = './';
// }

name.textcontent = applicant.name;
color.textContent = applicant.color;
description.textContent = applicant.description;
category.textContent = applicant.category;
softness.textContent = applicant.softness;

if(applicant.hooded) {
    hooded.textContent = 'Yes';
} else if(applicant.hooded === false) {
    hooded.textContent = 'No';
} else {
    hooded.textContent = '';
}

descriptors.textContent = applicant.descriptors.join(', ');
