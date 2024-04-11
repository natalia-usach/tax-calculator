import { TaxBandRates, TaxBandsMaxValues } from '../constants';

export function getGrossMonthlySalary(annualSalary: number): number {
  return +(annualSalary / 12).toFixed(2);
}

export function getGrossAnnualSalary(annualSalary: number): number {
  return annualSalary ?? 0;
}

export function getAnnualTaxPaid(annualSalary: number): number {
  let annualTaxPaid;
  if (annualSalary <= TaxBandsMaxValues.A) {
    annualTaxPaid = 0;
  } else {
    let salaryMinused = annualSalary - TaxBandsMaxValues.A;

    if (salaryMinused <= TaxBandsMaxValues.B) {
      annualTaxPaid = (salaryMinused / 100) * TaxBandRates.B;
    } else {
      salaryMinused -= TaxBandsMaxValues.B;
      annualTaxPaid = (TaxBandsMaxValues.B / 100) * TaxBandRates.B;
      annualTaxPaid += (salaryMinused / 100) * TaxBandRates.C;
    }
  }

  return annualTaxPaid;
}

export function getMonthlyTaxPaid(annualSalary: number): number {
  const annualTax = getAnnualTaxPaid(annualSalary);

  return +(annualTax / 12).toFixed(2);
}

export function getNetAnnualSalary(annualSalary: number): number {
  return annualSalary - getAnnualTaxPaid(annualSalary);
}

export function getNetMonthlySalary(annualSalary: number): number {
  return +(getNetAnnualSalary(annualSalary) / 12).toFixed(2);
}
