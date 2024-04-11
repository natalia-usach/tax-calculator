import { createAction, props } from '@ngrx/store';

export const getTaxCalculations = createAction(
  '[Tax Calculation] Get Tax Calculations',
  props<{ annualSalary: number }>(),
);
