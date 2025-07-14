import { expect } from '@playwright/test'
import { test } from '../../../fixtures/fixtures'

test.describe('Latest invoices block tests', () => {
    test('should have correct title', async ({ page, dashboardPage }) => {
        await dashboardPage.navigate()
        expect(dashboardPage.latestInvoicesLabel).toBeVisible()
    })
})
