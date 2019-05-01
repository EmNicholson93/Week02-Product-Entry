import getApplication from './applicant-app.js';
import applicantApi from './applicant-api.js';
const form = document.getElementById('onesie-design');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const applicant = getApplication(formData);
    console.log(getApplication(formData));
    applicantApi.save(applicant);
});
