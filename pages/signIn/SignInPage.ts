import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { User } from 'types';

let gdpr;

export class SignInPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigate() {
        await this.page.goto('/login');

        try {
            await this.page
                .getByRole('button', { name: 'Consent' })
                .click({ timeout: 3000 });
        } catch (error) {}
    }

    async submitSignUpForm({
        userName,
        email,
    }: Pick<User, 'userName' | 'email'>) {
        await this.page.getByTestId('signup-name').fill(userName);
        await this.page.getByTestId('signup-email').fill(email);
        await this.page.getByRole('button', { name: 'Signup' }).click();
    }
}
