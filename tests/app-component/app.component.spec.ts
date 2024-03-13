import { test, expect } from '@playwright/test';
import { AppPage } from './app.po';

test.describe('AppComponent', () => {
  let appPo: AppPage;
    
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    appPo = new AppPage();
  });


  test('add new item by using enter key', async ({ page }) => {
    const inputElement = appPo.getNewTodoInputElement(page);
    const todoItem = `TODO item - ${Date.now()}`;

    await inputElement.fill('');
    await inputElement.fill(todoItem);

    await page.keyboard.press("Enter");
    const addedTodoItem = appPo.getAddedTodoItem(page, 0);
    await expect(addedTodoItem).toBeVisible();

    expect(await addedTodoItem.textContent()).toEqual(todoItem);
  });
  
  test('add new item by pressing add button', async ({ page }) => {
    const inputElement = appPo.getNewTodoInputElement(page);
    const todoItem = `TODO item - ${Date.now()}`;

    await inputElement.fill('');
    await inputElement.fill(todoItem);

    await appPo.getTodoAddItemBtn(page).click();
    const addedTodoItem = appPo.getAddedTodoItem(page, 0);
    await expect(addedTodoItem).toBeVisible();
    expect(await addedTodoItem.textContent()).toEqual(todoItem);
  });

});
