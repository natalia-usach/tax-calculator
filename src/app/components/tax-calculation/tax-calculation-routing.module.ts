import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxCalculatorComponent } from './calculator/tax-calculator.component';

const routes: Routes = [
  { path: '', component: TaxCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxCalculationRoutingModule {}
