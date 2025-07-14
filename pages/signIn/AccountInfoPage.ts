import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class AccountInfoPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigate() {
        await this.page.goto('/signup');
    }

    async waitForNavigation() {
        await this.page.waitForURL('**\/signup');
    }

    get nameInput() {
        return this.page.getByTestId('name');
    }

    get emailInput() {
        return this.page.getByLabel('Email');
    }
}
