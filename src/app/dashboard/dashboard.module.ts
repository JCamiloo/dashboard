import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: '/home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./map/map.module').then(m => m.MapModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)
      }
    ]
  }
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
