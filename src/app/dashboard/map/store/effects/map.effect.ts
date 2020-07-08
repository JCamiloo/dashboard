import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { MapService } from '../../services/map.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as mapActions from '../actions';

@Injectable()
export class MapEffects {

  constructor(private actions$: Actions, private mapSrv: MapService) {}

  @Effect()
  LoadLayer$ = this.actions$.pipe(ofType(mapActions.LOAD_LAYER))
    .pipe(
      switchMap(() => {
        return this.mapSrv.fetchLayer().pipe(
          map(pizzas => new mapActions.LoadLayerSuccess(pizzas)),
          catchError(error => of(new mapActions.LoadLayerFail(null)))
        );
      })
    );
}