import * as fromMap from '../actions';
import { Layer } from '../../models/map.model';

export interface LayerState {
  layer: Layer;
  loaded: boolean;
  loading: boolean;
};

export const initialState: LayerState = {
  layer: null,
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromMap.MapAction): LayerState {
  switch (action.type) {
    case fromMap.LOAD_LAYER: {
      return {...state, loaded: false, loading: true };
    }

    case fromMap.LOAD_LAYER_SUCCESS: {
      const layer = action.payload;
      return { layer, loading: false, loaded: true };
    }

    case fromMap.LOAD_LAYER_FAIL: {
      const layer = action.payload;
      return { layer, loading: false, loaded: false };
    }
    
    default:
      return { ...state };
  }
}

export const getMapLayer = (state: LayerState) => state.layer;
export const getMapLoaded = (state: LayerState) => state.loaded;
export const getMapLoading = (state: LayerState) => state.loading;