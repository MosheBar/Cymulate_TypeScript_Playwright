import { expect, Page } from '@playwright/test';
import { config } from '../../config/config';
import { step } from '../../infra/decorators/stepDecorator';

export class BasePage {
  constructor(public page: Page) {
  }

  @step('Navigate to URL')
  async navigate(url?: string) {
    url ? await this.page.goto(url) : console.log('No URL provided');
  }

  @step('Get page title')
  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}
