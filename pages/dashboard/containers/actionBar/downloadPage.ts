import { expect, Locator, Page } from '@playwright/test';
import { step } from '../../../../infra/decorators/stepDecorator';

export class DownloadPage {
    private page: Page;
    private self: Locator;
    private clearAll: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.self = page.locator('[data-testid="download-manager-overlay-content"]');;
        this.clearAll = page.locator('button[data-testid="download-manager-clear-all-button"]');
    }

    @step('clear downloads if exists')
    async clearDownloadsIfExists() {
        if(await this.clearAll.isVisible()){
            await this.clearAll.click();
            await expect(this.clearAll).toBeHidden();
        }
    }     
}