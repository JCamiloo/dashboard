import { Action } from '@ngrx/store';
import { BasicGraph, Commerce } from '../../models/statistics.model';

export const LOAD_GRAPH = '[Statistics] Load Graph Data';
export const LOAD_COMMERCES = '[Statistics] Load Commerces Data';
export const LOAD_GRAPH_SUCCESS = '[Statistics] Load Graph Success';
export const LOAD_COMMERCES_SUCCESS = '[Statistics] Load Commerces Success';
export const LOAD_GRAPH_FAIL = '[Statistics] Load Graph Fail';
export const LOAD_COMMERCES_FAIL = '[Statistics] Load Commerces Fail';

export class LoadGraph implements Action {
  readonly type = LOAD_GRAPH;
}

export class LoadCommerces implements Action {
  readonly type = LOAD_COMMERCES;
}

export class LoadGraphSuccess implements Action {
  readonly type = LOAD_GRAPH_SUCCESS;
  constructor(public payload: BasicGraph[]) {}
}

export class LoadCommerceSuccess implements Action {
  readonly type = LOAD_COMMERCES_SUCCESS;
  constructor(public payload: Commerce[]) {}
}

export class LoadGraphFail implements Action {
  readonly type = LOAD_GRAPH_FAIL;
  constructor(public payload: any) {}
}

export class LoadCommercesFail implements Action {
  readonly type = LOAD_COMMERCES_FAIL;
  constructor(public payload: any) {}
}

export type StatisticsAction = 
    LoadGraph
  | LoadCommerces
  | LoadGraphSuccess 
  | LoadCommerceSuccess 
  | LoadCommerceSuccess 
  | LoadGraphFail
  | LoadCommercesFail;