import { InitialTaxCalculationTableData } from "../../constants";
import { mapTaxCalculationTableData } from "../../mappers";
import { getTaxCalculations } from "./tax-calculation.actions";
import { taxCalculationReducer } from "./tax-calculation.reducer";

describe('Tax Calculation Reducers', () => {
  const initialState = {
    tableData: InitialTaxCalculationTableData,
  }
  it('should handle getTaxCalculations', () => {
    const action = getTaxCalculations({ annualSalary: 5000 });

    const result = taxCalculationReducer(initialState, action);

    expect(result).toEqual(jasmine.objectContaining({ tableData: mapTaxCalculationTableData(5000) }));
  });
});
