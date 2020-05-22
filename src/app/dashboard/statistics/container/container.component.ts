import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { GraphResult } from 'src/app/interfaces/interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  results: GraphResult[] = [];

  constructor(private statisticsSrv: StatisticsService) { }

  // Petición de datos. Transformación a la estructura que necesitan las gráficas. 
  ngOnInit() {
    this.statisticsSrv.getData().pipe(map(resp => {
      return resp.map(({name, sales}) => ({name, value: Number(sales)}))
    })).subscribe(graphData => this.results = graphData);
  }
}
