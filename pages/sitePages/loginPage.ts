import { expect, Locator, Page } from '@playwright/test';
import { config } from '../../config/config';
import { step } from '../../infra/decorators/stepDecorator';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    private url: string = `${config.baseURL}cym/login`;
    private emailTextBox: Locator;
    private passwordTextBox: Locator;
    private submitButton: Locator;
    private loginHeaderTitle: Locator;

    constructor(public page: Page) {
        super(page);
        this.emailTextBox = page.locator('#email');
        this.passwordTextBox = page.locator('#password');
        this.submitButton = page.locator('button[type="submit"]');
        this.loginHeaderTitle = page.locator('.cym-legacy-heading');
    }

    @step('Navigate to login page')
    async navigateToLogin() {
        await super.navigate(this.url);

    }

    @step('Login with credentials')
    async login(username: string, password: string, clickLogin: boolean = true) {
        await this.emailTextBox.fill(username);
        await this.passwordTextBox.fill(password);
        if (clickLogin) {
            await this.submitButton.click();
        }
    }

    @step('Validate login URL')
    async validateLogin() {
        await expect(this.page).toHaveURL(this.url);
    }

    @step('Get login header title')
    async getLoginHeaderTitle() {
        return this.loginHeaderTitle;
    }
}