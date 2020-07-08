import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { GraphResult, CommerceResult } from '../models/statistics.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  graphResults: GraphResult[] = [];
  datatableResults: CommerceResult[] = [];

  constructor(private statisticsSrv: StatisticsService, private toast: ToastrService) { }

  ngOnInit() {
    this.fetchGraphData();
    this.fetchDatatableData();
  }

  // Petición de datos. Transformación a la estructura que necesitan las gráficas. 
  fetchGraphData() {
    this.statisticsSrv.fetchGraphData().pipe(map(resp => {
      return resp.map(({name, sales}) => ({name, value: Number(sales)}))
    })).subscribe(graphData => { 
      this.graphResults = graphData
    }, error => {
      this.toast.error('Ha ocurrido un error');
    });
  }

  // Petición de datos. Transformación a la estructura que necesita la tabla. 
  fetchDatatableData() {
    this.statisticsSrv.fetchDatatableData().pipe(map(resp => {
      return resp.map(commerce => ({...commerce, sales: Number(commerce.sales)}))
    })).subscribe(tableData => {
      this.datatableResults = tableData
    }, error => {
      this.toast.error('Ha ocurrido un error');
    });
  }
}
