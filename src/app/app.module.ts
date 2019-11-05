import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { SearchModule } from "./search/search.module";
import { AppComponent } from './app.component';
import { rootReducer } from './app.store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
    SearchModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
