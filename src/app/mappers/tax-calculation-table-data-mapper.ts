import { InitialTaxCalculationTableData } from '../constants';
import { TaxCalculationTableElement } from '../interfaces';

export function mapTaxCalculationTableData(annualSalary: number): TaxCalculationTableElement[] {
  return InitialTaxCalculationTableData.map((el) => {
    return { ...el, value: el.func(annualSalary) };
  });
}
