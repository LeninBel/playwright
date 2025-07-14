import { test as baseTest } from '@playwright/test';
import { DashboardPage, SignInPage, AccountInfoPage } from 'pages';

interface MyFixtures {
    dashboardPage: DashboardPage;
    signInPage: SignInPage;
    accountInfoPage: AccountInfoPage;
}

export const test = baseTest.extend<MyFixtures>({
    dashboardPage: async ({ page }, use) => {
        use(new DashboardPage(page));
    },
    signInPage: async ({ page }, use) => {
        use(new SignInPage(page));
    },
    accountInfoPage: async ({ page }, use) => {
        use(new AccountInfoPage(page));
    },
});
