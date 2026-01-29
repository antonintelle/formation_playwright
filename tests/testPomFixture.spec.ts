import { test, expect } from "./pages/fixture";


test.beforeEach('test', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
});

test('Pom page test', async ({ formPage }) => {
    await formPage.fillForm();

    await expect(formPage.modalContent).toBeVisible();
});