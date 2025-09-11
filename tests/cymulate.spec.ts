import { test } from '../infra/fixtures/testConf';
import { describe } from "node:test";
import { LoginPage } from "../pages/sitePages/loginPage";
import { expect } from "@playwright/test";
import { ActionBarButton } from '../pages/dashboard/containers/actionBar/actionBar';
import { DownloadPage } from '../pages/dashboard/containers/actionBar/downloadPage';

describe('Cymulate Exam', () => {
  test('validate login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    const loginHeaderTitle = await loginPage.getLoginHeaderTitle();
    const pageTitle = await loginPage.getTitle();

    expect(pageTitle).toBe("Cymulate");
    expect(loginHeaderTitle).toBe("Log in to your account");
  });

  test('login into Cymulate', async ({ dashboardPage }) => {
    const downloadPage= await dashboardPage.clickActionBar(ActionBarButton.Download);

    if (downloadPage instanceof DownloadPage) {
      await downloadPage?.clearDownloadsIfExists?.();
    }

  });


});
