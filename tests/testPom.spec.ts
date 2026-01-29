import { test, expect } from "@playwright/test";
import { FormPage } from "./pages/form";


test.beforeEach('test', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
});

test('Pom page test', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.fillForm();

    await expect(formPage.modalContent).toBeVisible();
});