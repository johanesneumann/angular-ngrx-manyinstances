import { RootState } from '../app.store';
import { Injectable, Inject, OnDestroy } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import {
  SearchMetadata,
  selectResults,
  search,
  removeSearch,
  initialState,
  SEARCH_METADATA
} from './search.store';

@Injectable()
export class SearchService implements OnDestroy {
  private meta: SearchMetadata = {id: "search-" + Math.random()}
  private selectSearchState = (state: RootState) =>
    state.searches[this.meta.id] || initialState;
  private selectSearchResults = createSelector(
    this.selectSearchState,
    selectResults
  );

  constructor(
    private store: Store<RootState>
  ) {}

  getResults$() {
    return this.store.select(this.selectSearchResults);
  }

  search(params: string) {
    this.store.dispatch(search(params, this.meta));
  }

  ngOnDestroy() {
    this.store.dispatch(removeSearch(this.meta.id));
  }
}
