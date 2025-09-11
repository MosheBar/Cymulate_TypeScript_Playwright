export interface TestConfig {
  baseURL: string;
  headless: boolean;
  mainSiteUsername: string;
  mainSitePassword: string;
}

const environment = (process.env.NODE_ENV || 'alpha').toLowerCase();
export const config: TestConfig = {
  ...require(`./config.${environment}.ts`).config,
};
