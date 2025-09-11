import { test as base, expect as expectBase } from '@playwright/test';
import { LoginPage } from '../../pages/sitePages/loginPage';
import { config } from '../../config/config';
import { BaseDashboardPage } from '../../pages/dashboard/baseDashboardPage';

type fixtures = {
  dashboardPage: BaseDashboardPage;
};

export const test = base.extend<fixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(config.mainSiteUsername, config.mainSitePassword);

    const dashboardPage = new BaseDashboardPage(page);
    await dashboardPage.validatePage();
    await use(dashboardPage);
  },


});

export const expect = expectBase.extend({});
