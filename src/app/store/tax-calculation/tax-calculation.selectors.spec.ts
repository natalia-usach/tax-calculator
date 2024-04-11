import { InitialTaxCalculationTableData } from "../../constants";
import { TaxCalculationState } from "./interfaces";
import { selectTaxCalculationTableData } from "./tax-calculation.selectors";

describe('Tax Calculation Selectors', () => {
  let state: TaxCalculationState;

  beforeEach(() => {
    state = {
      tableData: InitialTaxCalculationTableData,
    };
  });

  it('should selectLoadingState', () => {
    const result = selectTaxCalculationTableData.projector(state);

    expect(result).toBeTruthy();
  });
});
