import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixtures';

test.describe('New user registration', () => {
    test('user should be able to registrate', async ({
        page,
        signInPage,
        accountInfoPage,
    }) => {
        const user = {
            userName: 'TestUser',
            email: `test+${Date.now()}@test.com`,
        };
        await signInPage.navigate();
        await signInPage.submitSignUpForm(user);

        await accountInfoPage.waitForNavigation();
        expect(signInPage.url).toContain('signup');

        expect(accountInfoPage.nameInput).toHaveValue(user.userName);
        expect(accountInfoPage.emailInput).toHaveValue(user.email);
    });
});
