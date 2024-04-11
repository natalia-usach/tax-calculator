import {
  getGrossAnnualSalary,
  getAnnualTaxPaid,
  getGrossMonthlySalary,
  getMonthlyTaxPaid,
  getNetAnnualSalary,
  getNetMonthlySalary,
} from '../helpers/tax-calculator';
import { TaxCalculationTableElement } from '../interfaces';

export const InitialTaxCalculationTableData: TaxCalculationTableElement[] = [
  { func: getGrossAnnualSalary, title: 'Gross Annual Salary', value: 0 },
  { func: getGrossMonthlySalary, title: 'Gross Monthly Salary', value: 0 },
  { func: getNetAnnualSalary, title: 'Net Annual Salary', value: 0 },
  { func: getNetMonthlySalary, title: 'Net Monthly Salary', value: 0 },
  { func: getAnnualTaxPaid, title: 'Annual Tax Paid', value: 0 },
  { func: getMonthlyTaxPaid, title: 'Monthly Tax Paid', value: 0 },
];
