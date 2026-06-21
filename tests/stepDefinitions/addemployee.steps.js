const { Given,When,Then } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test")


When('User clicks on PIM menu', async function () {
  
    await page.getByRole('link', { name: 'PIM' }).click();
});

When('User clicks on Add employee submenu', async function () {
  
    await page.getByRole('link', { name: 'Add Employee' }).click();
});

When('User enter firstname {string} and lastname {string}', async function (firstname, lastname) {
  
     await page.getByRole('textbox', { name: 'First Name' }).fill(firstname);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);
});

When('user clicks on Save button', async function () {
  
    let r = (Math.random() + 1).toString(36).substring(7);
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(r)
    await page.getByRole('button', { name: 'Save' }).click();
});

Then('Employee should be created', async function () {
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});

When('user uploads a PNG file', async function () {
  
    await page.locator('//input[@type="file"]').setInputFiles('testdata/uploadfiles/images.png')

});

When('user uploads a JPG file', async function () {
   await page.locator('//input[@type="file"]').setInputFiles(['testdata/uploadfiles/samplejpg.jpg'])

});

When('user uploads a GIF file', async function () {
  
     await page.locator('//input[@type="file"]').setInputFiles('testdata/uploadfiles/download.gif')

});