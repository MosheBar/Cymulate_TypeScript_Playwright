import { expect, Locator, Page } from '@playwright/test';
import { step } from '../../../../infra/decorators/stepDecorator';

export class DownloadPage {
    private page: Page;
    private self: Locator;
    private clearAll: Locator;
    private closeButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.self = page.getByTestId('download-manager-overlay-content');
        this.clearAll = this.self.getByTestId('download-manager-clear-all-button');
        this.closeButton = this.self.getByTestId('overlay-content-close-button-Downloads');
    }

    @step('close download page')
    async closeDownloadPage() {
        await this.closeButton.click();
        await expect(this.self).toBeHidden();
    }

    @step('clear downloads if exists')
    async clearDownloadsIfExists() {
        if(await this.clearAll.isVisible()){
            await this.clearAll.click();
            await expect(this.clearAll).toBeHidden();
        }else{
            await this.closeDownloadPage();
        }
    }     
}