import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from './../../charts/charts.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DatatableComponent } from './components/datatable/datatable.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent }
];

@NgModule({
  declarations: [
    DatatableComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    NgxDatatableModule
  ]
})
export class StatisticsModule { }
