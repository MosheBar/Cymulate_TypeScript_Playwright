import { expect, Locator, Page } from '@playwright/test';
import { step } from '../../../../infra/decorators/stepDecorator';
import Module from 'module';
import { Filters } from './filters';

export class FindingsPage {
    private page: Page;
    private self: Locator;
    private header: Locator;
    private filtersButton: Locator;
    private filters: Filters;

    constructor(page: Page) {
        this.page = page;
        this.self = page.locator('.p-overlaypanel-enter-done');;
        this.header = page.getByTestId('main-page-title');
        this.filtersButton = page.getByTestId('Filters');
        this.filters = new Filters(page);

    }

    @step('get page header')
    async getPageHeader() {
        return this.header;
    }

    @step('Set filter')
    async setFilter({ filter, listItems, applyFilters = true, clearAll = false }: { filter: string; listItems: string[]; applyFilters?: boolean; clearAll?: boolean }) {
        await this.filtersButton.click();

        await this.filters.selectFilters({ filter, listItems, applyFilters, clearAll });
    }

}

