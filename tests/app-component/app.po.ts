import { Page } from "@playwright/test";

export class AppPage {
    
    getHeadingElement(page: Page) {
        return page.getByTestId('test-app-heading');    
    }
}