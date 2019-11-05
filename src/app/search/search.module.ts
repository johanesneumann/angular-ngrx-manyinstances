import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './search-container.component';
import { StoreModule } from '@ngrx/store';
import { searchReducer } from './search.store';
import { SearchService } from './search.service';


@NgModule({
  imports: [CommonModule, StoreModule.forFeature('searches', searchReducer)],
  declarations: [SearchContainerComponent],
  exports: [SearchContainerComponent]
})
export class SearchModule {
}
