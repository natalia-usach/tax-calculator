import { getAnnualTaxPaid, getGrossAnnualSalary, getGrossMonthlySalary, getMonthlyTaxPaid, getNetAnnualSalary, getNetMonthlySalary } from "./tax-calculator";

describe('Tax Calculator Helpers', () => {
  describe('getGrossMonthlySalary', () => {
    it('should return gross monthly salary based on gross annual salary value', () => {
      expect(getGrossMonthlySalary(5000)).toEqual(416.67);
    });
  });

  describe('getGrossAnnualSalary', () => {
    it('should return gross annual salary as it is', () => {
      expect(getGrossAnnualSalary(5000)).toEqual(5000);
    });
  });

  describe('getAnnualTaxPaid', () => {
    it('should return annual tax paid based on gross annual salary', () => {
      expect(getAnnualTaxPaid(5000)).toEqual(0);
    });
  });

  describe('getMonthlyTaxPaid', () => {
    it('should return monthly tax paid based on gross annual salary', () => {
      expect(getMonthlyTaxPaid(6000)).toEqual(16.67);
    });
  });

  describe('getNetAnnualSalary', () => {
    it('should return net annual salary based on gross annual salary', () => {
      expect(getNetAnnualSalary(6000)).toEqual(5800);
    });
  });

  describe('getNetMonthlySalary', () => {
    it('should return net monthly salary based on gross annual salary', () => {
      expect(getNetMonthlySalary(6000)).toEqual(483.33);
    });
  });
});
