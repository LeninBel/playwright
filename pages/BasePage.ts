import { Page } from "@playwright/test";

export abstract class BasePage {

    protected page;

    constructor(page: Page) {
        this.page = page
    }

 abstract navigate();
}