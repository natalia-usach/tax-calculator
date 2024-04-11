import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TaxCalculationState } from './interfaces';
import { taxCalculationFeatureKey } from './tax-calculation.reducer';

const selectTaxCalculationState = createFeatureSelector<TaxCalculationState>(taxCalculationFeatureKey);

export const selectTaxCalculationTableData = createSelector(selectTaxCalculationState, ({ tableData }) => tableData);
