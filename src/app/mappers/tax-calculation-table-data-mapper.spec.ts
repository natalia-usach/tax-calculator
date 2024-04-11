import { InitialTaxCalculationTableData } from '../constants';
import { mapTaxCalculationTableData } from './tax-calculation-table-data-mapper';

describe('mapTaxCalculationTableData', () => {
  it('should return mapped table data for tax calculations based on gross annual salary', () => {
    expect(mapTaxCalculationTableData(0)).toEqual(InitialTaxCalculationTableData);
  });
});
