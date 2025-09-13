import { expect, Locator, Page } from '@playwright/test';
import { config } from '../../config/config';
import { step } from '../../infra/decorators/stepDecorator';
import { BasePage } from '../sitePages/basePage';
import { ActionBar, ActionBarButton } from './containers/actionBar/actionBar';
import { NavigationBar, NavigationBarButton } from './containers/navigationBar/navigationBar';

export class BaseDashboardPage extends BasePage {
    private logo: Locator;
    private actionBar: ActionBar; 
    private navigationBar: NavigationBar;

    constructor(page: Page) {
        super(page);
        this.logo = page.getByTestId('logo-container');
        this.actionBar = new ActionBar(page);
        this.navigationBar = new NavigationBar(page);
    }

    @step('Validate Dashboard page')
    async validatePage() {
        await this.logo.waitFor({ state: 'visible', timeout: 10000 });
    }

    @step('click ActionBar')
    async clickActionBar(actionButton: typeof ActionBarButton[keyof typeof ActionBarButton]) {
        return await this.actionBar.clickActionButton(actionButton);

    }

    @step('click NavigationBar')
    async clickNavigationBar(navigationButton: typeof NavigationBarButton[keyof typeof NavigationBarButton]) {
        return await this.navigationBar.clickNavigationButton(navigationButton);
    }
}