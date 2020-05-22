import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { HorizontalBarChartComponent } from './components/horizontal-bar-chart/horizontal-bar-chart.component';

@NgModule({
  declarations: [
    PieChartComponent,
    HorizontalBarChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ], 
  exports: [
    PieChartComponent,
    HorizontalBarChartComponent
  ]
})
export class ChartsModule { }
