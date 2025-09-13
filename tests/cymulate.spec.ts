import { test } from '../infra/fixtures/testConf';
import { describe } from "node:test";
import { LoginPage } from "../pages/sitePages/loginPage";
import { expect } from "@playwright/test";
import { ActionBarButton } from '../pages/dashboard/containers/actionBar/actionBar';
import { DownloadPage } from '../pages/dashboard/containers/actionBar/downloadPage';
import { NavigationBar, NavigationBarButton } from '../pages/dashboard/containers/navigationBar/navigationBar';
import { FindingsPage } from '../pages/dashboard/containers/navigationBar/findingsPage';

describe('Cymulate Exam', () => {
  test('validate login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    const loginHeaderTitle = await loginPage.getLoginHeaderTitle();
    await expect(loginHeaderTitle).toHaveText("Log in to your account", { timeout: 10000 });
    
    const pageTitle = await loginPage.getTitle();
    expect(pageTitle).toBe("Cymulate");
  });

  test('login into Cymulate', async ({ dashboardPage }) => {
    const downloadPage= await dashboardPage.clickActionBar(ActionBarButton.Download) as DownloadPage;
    await downloadPage?.clearDownloadsIfExists();

    const findingPage = await dashboardPage.clickNavigationBar(NavigationBarButton.Finding) as FindingsPage;
    expect(findingPage).not.toBeNull();
    const header = await findingPage.getPageHeader();
    await expect(header).toHaveText("Findings");

    await findingPage.setFilter({ filter: "Module", listItems: ["BAS"], applyFilters: true });

    console.log('Test completed successfully');

  });


});
