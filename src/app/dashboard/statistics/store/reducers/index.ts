import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromStatistics from './statistics.reducer';

export interface StatisticsState {
  dashboard: fromStatistics.StatisticsState;
};

export const reducers: ActionReducerMap<StatisticsState> = {
  dashboard: fromStatistics.reducer
};

export const getDashboardState = createFeatureSelector<StatisticsState>('statistics');