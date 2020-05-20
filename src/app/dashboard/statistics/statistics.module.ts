import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DatatableComponent } from './components/datatable/datatable.component';

const routes: Routes = [
  { path: '', component: DatatableComponent }
];

@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StatisticsModule { }
