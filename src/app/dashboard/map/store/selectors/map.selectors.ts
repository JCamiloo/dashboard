import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromMap from '../reducers/map.reducer';

export const getMapState = createSelector(
  fromFeature.getLayerState,
  (state: fromFeature.MapState) => state.layer
);

export const getMapLayer = createSelector(
  getMapState,
  fromMap.getMapLayer
);

export const getMapLoaded = createSelector(
  getMapState,
  fromMap.getMapLoaded
);

export const getMapLoading = createSelector(
  getMapState,
  fromMap.getMapLoading
);