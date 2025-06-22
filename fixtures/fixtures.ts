import { test as baseTest } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

interface MyFixtures {
    dashboardPage: DashboardPage
}

export const test = baseTest.extend<MyFixtures>({
    dashboardPage: async ({ page }, use) => {
     use(new DashboardPage(page));
    },
  });