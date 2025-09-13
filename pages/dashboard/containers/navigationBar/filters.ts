import { expect, Locator, Page } from '@playwright/test';
import { step } from '../../../../infra/decorators/stepDecorator';
import Module from 'module';

export class Filters {
    private page: Page;
    private self: Locator;
    private applyFiltersButton: Locator;
    private clearAllFiltersButton: Locator;
    private filterItemButton: Locator;
    private listItemSelection: Locator;
    private listItemCheckbox: string;

    constructor(page: Page) {
        this.page = page;
        this.self = page.locator('.p-overlaypanel-enter-done');;
        this.applyFiltersButton = this.page.getByTestId('ApplyFilters');
        this.clearAllFiltersButton = this.self.getByTestId('ClearAll');
        this.filterItemButton = this.self.getByTestId('FilterItem');
        this.listItemSelection = this.self.getByTestId('ListItem');
        this.listItemCheckbox = 'checkbox-label';

    }

    @step('Select filters')
    async selectFilters({ filter, listItems, applyFilters = true, clearAll = false }: { filter: string; listItems: string[]; applyFilters?: boolean; clearAll?: boolean }) {
        await this.filterItemButton.getByText(filter).click();
        if (clearAll) {
            await this.clearAllFiltersButton.click();
        }

        for (const item of listItems) {
            await this.listItemSelection
            .filter({ hasText: new RegExp(`^${item}$`) })
            .getByTestId(this.listItemCheckbox)
            .click();
        }

        if (applyFilters) {
            await this.applyFiltersButton.click();
        }

    }

}

