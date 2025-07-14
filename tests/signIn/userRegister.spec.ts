import { expect } from '@playwright/test';
import { test } from '../../fixtures/fixtures';

const user = {
    userName: 'TestUser',
    email: `test+${Date.now()}@test.com`,
    password: `test+${Date.now()}password`,
    firstName: `testFirstName${Date.now()}`,
    lastName: `testLastName${Date.now()}`,
    address: `address${Date.now()}`,
    state: `test-state`,
    city: `test-city`,
    zipCode: '12345678',
    phoneNumber: '12423435435',
};

test.describe('New user registration', () => {
    test('user should be able to registrate', async ({
        signInPage,
        accountInfoPage,
    }) => {
        await signInPage.navigate();
        await signInPage.submitSignUpForm(user);

        await accountInfoPage.waitForSignUpNavigation();
        expect(signInPage.url).toContain('signup');

        expect(accountInfoPage.nameInput).toHaveValue(user.userName);
        expect(accountInfoPage.emailInput).toHaveValue(user.email);

        await accountInfoPage.fillOnlyRequiredFields(user);
        await accountInfoPage.createAccountButton.click();

        expect(accountInfoPage.successCreationMessage).toBeVisible();
    });
});
