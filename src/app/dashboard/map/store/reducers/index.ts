import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromMap from './map.reducer';

export interface MapState {
  layer: fromMap.LayerState;
};

export const reducers: ActionReducerMap<MapState> = {
  layer: fromMap.reducer
};

export const getLayerState = createFeatureSelector<MapState>('map');