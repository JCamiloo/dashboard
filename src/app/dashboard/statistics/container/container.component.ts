import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { GraphResult, CommerceResult } from '../models/statistics.model';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromStore from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  graphResults$: Observable<GraphResult[]>;
  graphResults: GraphResult[];
  datatableResults$: Observable<CommerceResult[]>;
  datatableResults: CommerceResult[];

  constructor(private store: Store<fromStore.StatisticsState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadGraph());
    this.store.dispatch(new fromStore.LoadCommerces());
    this.graphResults$ = this.store.select(fromStore.getStatisticsGraphData);
    this.datatableResults$ = this.store.select(fromStore.getStatisticsCommercesDatatable);
  }
}
