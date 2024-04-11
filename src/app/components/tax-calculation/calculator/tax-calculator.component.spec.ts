import { InitialTaxCalculationTableData } from "../../../constants";
import { TaxCalculatorComponent } from "./tax-calculator.component";
import { MockStore, createMockStore } from '@ngrx/store/testing';

describe('TaxCalculatorComponent', () => {
  let component: TaxCalculatorComponent;
  let store: MockStore;

  beforeEach(() => {
    const initialState = {
      tableData: InitialTaxCalculationTableData,
    };

    store = createMockStore({ initialState });
    component = new TaxCalculatorComponent(store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
