import { createReducer, on } from '@ngrx/store';
import { TaxCalculationState } from './interfaces';
import { getTaxCalculations } from './tax-calculation.actions';
import { mapTaxCalculationTableData } from '../../mappers';
import { InitialTaxCalculationTableData } from '../../constants';

export const taxCalculationFeatureKey = 'tax-calculation';

export const initialState: TaxCalculationState = {
  tableData: InitialTaxCalculationTableData,
};

export const taxCalculationReducer = createReducer(
  initialState,
  on(getTaxCalculations, (state, { annualSalary }): TaxCalculationState => ({ ...state, tableData: mapTaxCalculationTableData(annualSalary) })),
);
