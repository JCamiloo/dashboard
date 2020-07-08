import { environment } from 'src/environments/environment';
import { Component, Input } from '@angular/core';
import { GraphResult } from '../../../dashboard/statistics/models/statistics.model';

@Component({
  selector: 'app-pie-chart',
  template: `<div class="chart-container">
              <ngx-charts-pie-chart
                [results]="results"
                [labels]="true"
                [scheme]="colorScheme"
                [doughnut]="true">
              </ngx-charts-pie-chart>
            </div>`,
})
export class PieChartComponent {

  @Input() results: GraphResult[];
  legendPosition: string = 'below';
  colorScheme = environment.colors;

  constructor() {}

}
