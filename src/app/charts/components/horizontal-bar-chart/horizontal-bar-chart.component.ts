import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-horizontal-bar-chart',
  template: `<div class="chart-container">
              <ngx-charts-bar-horizontal
                [scheme]="colorScheme"
                [results]="results"
                [xAxis]="true"
                [yAxis]="true"
                [showXAxisLabel]="true"
                [showYAxisLabel]="true"
                [xAxisLabel]="xLabel"
                [yAxisLabel]="yLabel"
                [showDataLabel]="true"
                style="fill: #263238;">
              </ngx-charts-bar-horizontal>
            </div>`,
})
export class HorizontalBarChartComponent {

  @Input() results;
  @Input() xLabel;
  @Input() yLabel;
  colorScheme = environment.colors;
  
  constructor() { }

}
