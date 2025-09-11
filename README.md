# Cymulate - Moshe Barda

In this project I have created a simple test for the Cymulate site.
The test is written in TypeScript using Playwright and Jest.
The Report is generated using the Allure Reporter.

## Installation

run the following command to install the project dependencies.

```sh
npm install
```

## test config

We are using the Playwright config therefore we can run the test in different browsers -
We set the tests to run only on chromium, and it can be configured in the playwright.config.ts.

We set config for environment variables, and it can be configured in the config folder by environments.

## Run the test

We can run simple npm command to run the test in the different environments.
on every run, the test will delete the last report and generate a new report.

```sh
 npm run test:prod
```

## Report

```sh
 allure serve -h 127.0.0.1
```

