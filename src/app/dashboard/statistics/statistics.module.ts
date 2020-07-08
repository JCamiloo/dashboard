import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from './../../charts/charts.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';

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
    StoreModule.forFeature('statistics', reducers),
    EffectsModule.forFeature(effects),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxDatatableModule
  ]
})
export class StatisticsModule { }
