const { Given,When,Then } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test")

Given('User Launch the Application', async function () {
  
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

When('User enter username {string} and password {string}', async function (username, password) {
  
       //enter the username 
    await page.getByRole('textbox', { name: 'Username' }).fill(username);

    //enter password 
    await page.getByRole('textbox', { name: 'Password' }).fill(password); 

});

When('User clicks login button', async function () {
  
      // click on login button
    await page.getByRole('button', { name: 'Login' }).click();

});

Then('User should be navigated to dashboard page', async function () {
    
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  
    // Verify time at work is visible 
    await expect(page.getByText('Time at Work')).toBeVisible({ timeout: 60000 });
});

Then('User should Login error Message', async function () {

    //assertion
    await expect(page.getByText('Invalid credentials', { exact: true })).toBeVisible()
  
});