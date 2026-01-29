import { Locator, Page } from "@playwright/test";

export class FormPage { 

    firstNameInput: Locator;
    lastNameInput: Locator;
    emailInput: Locator;
    genderRadio: Locator;
    mobileInput: Locator;
    subjectsInput: Locator;
    hobbiesCheckbox: Locator;
    pictureUpload: Locator;
    currentAddressInput: Locator;
    submitButton: Locator;
    modalContent: Locator;


    constructor(private page: Page) {
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.genderRadio = page.getByText('Male', { exact: true });
        this.mobileInput = page.locator('#userNumber');
        this.subjectsInput = page.locator('#subjectsInput');
        this.hobbiesCheckbox = page.locator('label').filter({ hasText: 'Sports' });
        this.pictureUpload = page.locator('#uploadPicture');
        this.currentAddressInput = page.locator('#currentAddress');
        this.submitButton = page.locator('#submit');
        this.modalContent = page.locator('.modal-content');
    }

    async fillForm() {
        await this.firstNameInput.fill('Antonin');
        await this.lastNameInput.fill('Telle');
        await this.emailInput.fill('antonin.telle@example.com');    
        await this.genderRadio.click();
        await this.mobileInput.fill('0606060606');
        await this.subjectsInput.fill('Maths');
        await this.subjectsInput.press('Enter');
        await this.hobbiesCheckbox.click();
        await this.pictureUpload.setInputFiles('C:\\Users\\anton\\Downloads\\Galdric.png');
        await this.currentAddressInput.fill('Chez moi c\'est la rue');

        await this.submitButton.click();
    }

}