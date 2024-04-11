import { taxCalculationFeatureKey, taxCalculationReducer } from "./tax-calculation/tax-calculation.reducer";

export const rootReducer = {
  [taxCalculationFeatureKey]: taxCalculationReducer,
};
