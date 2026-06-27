
import { test, expect } from '@playwright/test';

test('Critical Flow Check', async ({ page }) => {
  // We use an absolute URL so GitHub's cloud runner knows exactly where to go
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
    