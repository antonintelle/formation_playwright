import test, { expect } from "@playwright/test";
import testData from '../datasets/data.json';

test('formulaire', async ({ page }) => {
    await page.goto(process.env.URL || 'https://demoqa.com/automation-practice-form');

    await page.locator('#firstName').fill(testData.person.firstname);
    await page.locator('#lastName').fill(testData.person.lastname);
    await page.locator('#userEmail').fill(testData.person.email);
    await page.getByText('Male', { exact: true }).click();
    await page.locator('#userNumber').fill(testData.person.phone);
    await page.locator('#dateOfBirthInput').click();
    await page.locator('#subjectsInput').fill('Maths');
    await page.locator('#subjectsInput').press('Enter');
    await page.locator('label').filter({ hasText: 'Reading' }).click();
    await page.locator('#uploadPicture').setInputFiles('C:\\Users\\anton\\Downloads\\Galdric.png');
    await page.locator('#currentAddress').fill(testData.person.address);
    await page.locator('#submit').click();

    await expect(page.locator('.modal-content')).toBeVisible();
});