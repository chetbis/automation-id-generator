import { Page } from '@playwright/test';

export class AppPage {

  /**
   * Gets todo input element
   * @param page
   * @returns 
   */
  getNewTodoInputElement(page: Page) {
    return page.getByTestId('todo-app-add-new-item-input');
  }

  /**
   * Gets todo item by index
   * @param page
   * @param index
   * @returns 
   */
  getAddedTodoItem(page: Page, index: number) {
    return page.getByTestId(`todo-app-todo-item-${index}`);
  }


  /**
   * Gets todo input add button
   * @param page 
   * @returns 
   */
  getTodoAddItemBtn(page: Page) {
    return page.getByTestId('todo-app-add-new-item-btn');
  }

}
