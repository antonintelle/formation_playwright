import test, { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";


test('formulaire', async ({ page }) => {
    await page.goto(process.env.URL || 'https://demoqa.com/automation-practice-form');

    await page.locator('#firstName').fill(process.env.FIRST_NAME || faker.person.firstName());
    await page.locator('#lastName').fill(process.env.LAST_NAME || faker.person.lastName());
    await page.locator('#userEmail').fill(process.env.EMAIL || faker.internet.email());
    await page.getByText('Male', { exact: true }).click();
    await page.locator('#userNumber').fill(process.env.PHONE || faker.phone.number());
    await page.locator('#dateOfBirthInput').click();
    await page.locator('#subjectsInput').fill('Maths');
    await page.locator('#subjectsInput').press('Enter');
    await page.locator('label').filter({ hasText: 'Reading' }).click();
    await page.locator('#uploadPicture').setInputFiles('C:\\Users\\anton\\Downloads\\Galdric.png');
    await page.locator('#currentAddress').fill(process.env.ADDRESS || faker.location.streetAddress());
    await page.locator('#submit').click();

    await expect(page.locator('.modal-content')).toBeVisible();
});