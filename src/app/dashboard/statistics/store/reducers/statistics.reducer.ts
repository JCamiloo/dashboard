import * as fromStatistics from '../actions';
import { BasicGraph, Commerce } from '../../models/statistics.model';

export interface StatisticsState {
  graph: BasicGraph[];
  commerces: Commerce[]
  loaded: boolean;
  loading: boolean;
};

export const initialState: StatisticsState = {
  graph: [],
  commerces: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState, 
  action: fromStatistics.StatisticsAction): StatisticsState {

  switch (action.type) {
    case fromStatistics.LOAD_GRAPH: {
      return {...state, loaded: false, loading: true };
    }

    case fromStatistics.LOAD_COMMERCES: {
      return {...state, loaded: false, loading: true };
    }

    case fromStatistics.LOAD_GRAPH_SUCCESS: {
      const graph = action.payload;
      return {...state, graph, loading: false, loaded: true };
    }

    case fromStatistics.LOAD_COMMERCES_SUCCESS: {
      const commerces = action.payload;
      return {...state, commerces, loading: false, loaded: true };
    }

    case fromStatistics.LOAD_GRAPH_FAIL: {
      const graph = action.payload;
      return { ...state, graph, loading: false, loaded: false };
    }

    case fromStatistics.LOAD_COMMERCES_FAIL: {
      const commerces = action.payload;
      return { ...state, commerces, loading: false, loaded: false };
    }
    
    default:
      return { ...state };
  }
}

export const getStatisticsGraph = (state: StatisticsState) => state.graph;
export const getStatisticsCommerces = (state: StatisticsState) => state.commerces;
export const getStatisticsLoaded = (state: StatisticsState) => state.loaded;
export const getStatisticsLoading = (state: StatisticsState) => state.loading;