import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import type { User } from 'types';

export class AccountInfoPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigate() {
        await this.page.goto('/signup');
    }

    async waitForSignUpNavigation() {
        await this.waitForNavigation('**\/signup');
    }

    async waitForSuccessSignUpNavigation() {
        await this.waitForNavigation('**\/signup');
    }

    get nameInput() {
        return this.page.getByTestId('name');
    }

    get emailInput() {
        return this.page.getByLabel('Email');
    }

    get successCreationMessage() {
        return this.page.getByText('Account Created!');
    }

    get createAccountButton() {
        return this.page.getByRole('button', { name: 'Create Account' });
    }

    async fillOnlyRequiredFields(data: User) {
        await this.page.getByLabel('Password').fill(data.password);
        await this.page.getByLabel('First name ').fill(data.firstName);
        await this.page.getByLabel('Last name ').fill(data.lastName);
        await this.page.getByTestId('address').fill(data.address);
        await this.page.getByLabel('State ').fill(data.state);
        await this.page.getByLabel('City ').fill(data.city);
        await this.page.getByTestId('zipcode').fill(data.zipCode);
        await this.page.getByLabel('Mobile Number ').fill(data.phoneNumber);
    }
}
