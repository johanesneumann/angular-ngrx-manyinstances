import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { SEARCH_METADATA } from './search.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-container',
  template: `
  <p>Results: {{results$ | async}}</p>
<button (click)="search()">Search</button>
`,
  providers: [SearchService]
})
export class SearchContainerComponent implements OnInit {
  results$: Observable<string>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.results$ = this.searchService.getResults$();
  }

  search() {
    this.searchService.search('search ' + Math.random());
  }
}
