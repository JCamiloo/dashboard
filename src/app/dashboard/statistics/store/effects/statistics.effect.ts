import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { StatisticsService } from '../../services/statistics.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as statisticsActions from '../actions';

@Injectable()
export class StatisticsEffects {

  constructor(private actions$: Actions, private statisticsSrv: StatisticsService) {}

  @Effect()
  LoadGraph$ = this.actions$.pipe(ofType(statisticsActions.LOAD_GRAPH))
    .pipe(
      switchMap(() => {
        return this.statisticsSrv.fetchGraphData().pipe(
          map(graph => new statisticsActions.LoadGraphSuccess(graph)),
          catchError(error => of(new statisticsActions.LoadGraphFail([])))
        );
      })
    );

  @Effect()
  LoadCommerces$ = this.actions$.pipe(ofType(statisticsActions.LOAD_COMMERCES))
    .pipe(
      switchMap(() => {
        return this.statisticsSrv.fetchDatatableData().pipe(
          map(commerces => new statisticsActions.LoadCommerceSuccess(commerces)),
          catchError(error => of(new statisticsActions.LoadCommercesFail([])))
        );
      })
    );
}