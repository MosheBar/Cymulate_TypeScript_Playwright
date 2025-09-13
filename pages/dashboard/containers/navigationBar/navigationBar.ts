import { expect, Locator, Page } from '@playwright/test';
import { step } from '../../../../infra/decorators/stepDecorator';
import { AsmPage } from './asmPage';
import { FindingsPage } from './findingsPage';

export const NavigationBarButton = {
    ASM: { locator: '[data-testid="link-button-ASM"]', name: 'ASM' },
    Finding: { locator: '[data-testid="link-button-Findings"]', name: 'Finding' },
    BAS: { locator: '[data-testid="link-BAS"]', name: 'BAS' },
} as const;

export class NavigationBar {
    private page: Page;
    private self: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.self = page.locator('[class^="Header_navbar-links-container"]');;
    }

    @step('click on Navigation button')
    async clickNavigationButton(navigationButton: typeof NavigationBarButton[keyof typeof NavigationBarButton]) {
        const buttonLocator = this.self.locator(navigationButton.locator);
        await buttonLocator.click();
        switch (navigationButton) {
            case NavigationBarButton.ASM:
                return new AsmPage(this.page);
            case NavigationBarButton.Finding:
                return new FindingsPage(this.page);
        }
    }
        
}