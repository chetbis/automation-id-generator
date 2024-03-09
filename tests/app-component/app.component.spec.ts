import { test, expect } from '@playwright/test';
import { AppPage } from './app.po';

test.describe('AppComponent', () => {
  let appPo: AppPage;
    
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    appPo = new AppPage();
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/TestApp/);
  });

  test('has heading', async ({ page }) => {
    await expect(appPo.getHeadingElement(page)).toBeVisible();
  });

  test('heading is Hello, test_app', async ({ page }) => {
    const heading = appPo.getHeadingElement(page);
    expect(await heading.textContent()).toEqual('Hello, test_app');
  });
  
});
