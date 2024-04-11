import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTaxCalculations, selectTaxCalculationTableData } from '../../../store/tax-calculation';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrl: './tax-calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxCalculatorComponent {
  readonly tableData$ = this.store.select(selectTaxCalculationTableData);

  constructor(private readonly store: Store) {}

  onCalculationFormSubmitted(value: number): void {
    this.store.dispatch(getTaxCalculations({ annualSalary: value }));
  }
}
