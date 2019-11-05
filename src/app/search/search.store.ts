import { InjectionToken } from '@angular/core';

export interface SearchStates {
  [searchStateId: string]: SearchState;
}

export interface SearchState {
  results: string;
}

export interface SearchMetadata {
  id: string;
}

export const SEARCH_METADATA = new InjectionToken('Search Metadata');

export const search = (params: string, meta: SearchMetadata) => ({
  type: 'SEARCH',
  payload: params,
  meta
});
export const removeSearch = (searchId: string) => ({
  type: 'REMOVE',
  payload: searchId
});

export const initialState: SearchState = { results: null };

export const searchReducer = (state: SearchStates = {}, action: any) => {
  switch (action.type) {
    case 'SEARCH':
      const id = action.meta.id;
      state = createStateIfDoesntExist(state, id);
      return {
        ...state,
        [id]: {
          ...state[id],
          results: action.payload
        }
      };
    case 'REMOVE':
      return Object.keys(state).reduce((filteredState, searchId) => {
        if (searchId !== action.payload) {
          filteredState[searchId] = state[searchId];
        }
        return filteredState;
      }, {});
  }
  return state;
};

export const selectResults = (state: SearchState) => state.results;

const createStateIfDoesntExist = (state: SearchStates, id: string) => {
  if (!state[id]) {
    return {
      ...state,
      [id]: initialState
    };
  }
  return state;
};
