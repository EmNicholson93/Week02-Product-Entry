import applicantApi from '../src/applicant-api.js';

const test = QUnit.test;
QUnit.module('applicant api');

test('round trip the applicant app data', assert => {
    //arrange
    const applicant = { name: 'seal' };
    //act
    applicantApi.save(applicant);
    const result = applicantApi.get();
    //assert
    assert.deepEqual(result, applicant);
});