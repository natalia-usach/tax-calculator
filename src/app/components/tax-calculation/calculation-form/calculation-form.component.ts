import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tax-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrl: './calculation-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxCalculationFormComponent {
  @Output() calculationFormSubmitted = new EventEmitter<number>();

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb?.group({
      annualSalary: [0],
    });
  }

  submitForm(form: FormGroup): void {
    const grossAnnualSalary = form.value.annualSalary <= 0 ? 0 : form.value.annualSalary;

    this.calculationFormSubmitted.emit(grossAnnualSalary);
  }
}
