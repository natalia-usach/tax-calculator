export interface TaxCalculationTableElement {
  func: (annualSalary: number) => number;
  title: string;
  value: number;
}
