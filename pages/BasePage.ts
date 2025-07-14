import { Page } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    abstract navigate(): Promise<void>;

    get url() {
        return this.page.url();
    }

    protected async waitForNavigation(url: string) {
        await this.page.waitForURL(url);
    }
}
