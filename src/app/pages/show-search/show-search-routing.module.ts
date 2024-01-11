import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowSearchComponent } from './show-search.component';

const routes: Routes = [
  {
    path: '',
    component: ShowSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowSearchRoutingModule { }
