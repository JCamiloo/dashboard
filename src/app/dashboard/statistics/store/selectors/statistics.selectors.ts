import { createSelector } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromFeature from '../reducers';
import * as fromStatistics from '../reducers/statistics.reducer';

export const getStatisticsState = createSelector(
  fromFeature.getDashboardState,
  (state: fromFeature.StatisticsState) => state.dashboard
);

export const getStatisticsGraph = createSelector(
  getStatisticsState,
  fromStatistics.getStatisticsGraph
);
export const getStatisticsGraphData = createSelector(
  getStatisticsGraph,
  (graph) => graph.map(({name, sales}) => ({name, value: Number(sales)}))
);

export const getStatisticsCommerces = createSelector(
  getStatisticsState,
  fromStatistics.getStatisticsCommerces
);

export const getStatisticsCommercesDatatable = createSelector(
  getStatisticsCommerces,
  (commerces) => commerces.map(commerce => ({...commerce, sales: Number(commerce.sales)}))
);

export const getStatisticsLoaded = createSelector(
  getStatisticsState,
  fromStatistics.getStatisticsLoaded
);

export const getStatisticsLoading = createSelector(
  getStatisticsState,
  fromStatistics.getStatisticsLoading
);