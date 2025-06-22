import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage {

    constructor(page: Page) {
        super(page); 
    }

    get latestInvoicesLabel() {
        return this.page.getByText('Latest Invoices');
      }

   async navigate(){
     return this.page.goto('/dashboard');
    }

    
}