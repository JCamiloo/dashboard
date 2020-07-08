import { Action } from '@ngrx/store';
import { Layer } from '../../models/map.model';

export const LOAD_LAYER = '[Map] Load Layer';
export const LOAD_LAYER_FAIL = '[Map] Load Layer Fail';
export const LOAD_LAYER_SUCCESS = '[Map] Load Layer Success';

export class LoadLayer implements Action {
  readonly type = LOAD_LAYER;
}

export class LoadLayerFail implements Action {
  readonly type = LOAD_LAYER_FAIL;
  constructor(public payload: any) {}
}

export class LoadLayerSuccess implements Action {
  readonly type = LOAD_LAYER_SUCCESS;
  constructor(public payload: Layer) {}
}

export type MapAction = LoadLayer | LoadLayerFail | LoadLayerSuccess;