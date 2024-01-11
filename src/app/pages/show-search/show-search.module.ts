import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ShowSearchRoutingModule } from './show-search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowSearchComponent } from './show-search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShowSearchComponent],
  imports: [
    CommonModule,
    ShowSearchRoutingModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ShowSearchModule { }
