import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TaxCalculatorComponent } from './calculator/tax-calculator.component';
import { TaxCalculationFormComponent } from './calculation-form/calculation-form.component';
import { TaxCalculationTableComponent } from './calculation-table/calculation-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TaxCalculationRoutingModule } from './tax-calculation-routing.module';

@NgModule({
  declarations: [TaxCalculatorComponent, TaxCalculationFormComponent, TaxCalculationTableComponent],
  imports: [
    CommonModule,
    TaxCalculationRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TaxCalculationModule {}
