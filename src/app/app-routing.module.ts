import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './constants';
import { TaxCalculationModule } from './components/tax-calculation/tax-calculation.module';

const routes: Routes = [
  { path: '', redirectTo: AppRoutes.TaxCalculation, pathMatch: 'full' },
  {
    path: AppRoutes.TaxCalculation,
    loadChildren: () => TaxCalculationModule,
  },
  {
    path: '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
      canceledNavigationResolution: 'computed',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
