import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';

const routes: Routes = [
  { path: '', component: SearchListComponent },
  { path: ':id', component: SearchDetailComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SearchRoutingModule {}
