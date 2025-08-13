import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { SearchRoutingModule } from './search-routing.module';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';
import { MinlenDirective } from './directives/minlen.directive';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptFormsModule, SearchRoutingModule],
  declarations: [SearchListComponent, SearchDetailComponent, MinlenDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SearchModule {}
