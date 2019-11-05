import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h4>Search1</h4>
  <app-search-container></app-search-container>
  <h4>Search2</h4>
  <app-search-container *ngIf="search2Visible"></app-search-container>
  <button (click)="search2Visible = !search2Visible">Toggle Search2</button>
`
})
export class AppComponent  {
  
}
