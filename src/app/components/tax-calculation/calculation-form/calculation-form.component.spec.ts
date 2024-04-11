import { FormBuilder } from "@angular/forms";
import { TaxCalculationFormComponent } from "./calculation-form.component";

describe('TaxCalculationFormComponent', () => {
  let component: TaxCalculationFormComponent;

  beforeEach(() => {
    component = new TaxCalculationFormComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
