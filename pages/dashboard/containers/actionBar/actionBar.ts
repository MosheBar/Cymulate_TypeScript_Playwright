import { expect, Locator, Page } from '@playwright/test';
import { step } from '../../../../infra/decorators/stepDecorator';
import { DownloadPage } from './downloadPage';
import { NotificationPage } from './notificationPage';

export const ActionBarButton = {
    Download: { locator: '[data-testid="download-manager-container"]', name: 'Downloads' },
    Notification: { locator: '[data-testid="notifications-container"]', name: 'Notifications' },
} as const;

export class ActionBar {
    private page: Page;
    private self: Locator;
    private downloadButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.self = page.locator('[class^="Header_navbar-right"]');;
        this.downloadButton = page.locator('button[data-testid="DownloadIcon"]');
    }

    @step('click on Action button')
    async clickActionButton(actionButton: typeof ActionBarButton[keyof typeof ActionBarButton]) {
        const buttonLocator = this.page.locator(actionButton.locator);
        await buttonLocator.click();
        switch (actionButton) {
            case ActionBarButton.Download:
                return new DownloadPage(this.page);
            case ActionBarButton.Notification:
                return new NotificationPage(this.page);
        }
    }
        
}