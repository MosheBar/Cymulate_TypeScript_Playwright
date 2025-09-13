import { expect, Locator, Page } from '@playwright/test';
import { step } from '../../../../infra/decorators/stepDecorator';

export class AsmPage {
    private page: Page;
    

    constructor(page: Page) {
        this.page = page;
    }
  
}