import { Selector } from 'testcafe';

fixture('File uploading flow')
    .page('https://the-internet.herokuapp.com/upload');

test('User should be able to upload file', async (testcafeController) => {
    // наш код
    await testcafeController.click('#file-upload');
    await testcafeController.setFilesToUpload('input#file-upload', '../package.json');
    await testcafeController.click('#file-submit');
    await testcafeController.expect(Selector("[id='uploaded-files']").innerText).eql('package.json', 'Invalid file name');
});