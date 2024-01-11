import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ShowInfoRoutingModule } from './show-info-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowInfoComponent } from './show-info.component';


@NgModule({
  declarations: [ShowInfoComponent],
  imports: [
    CommonModule,
    ShowInfoRoutingModule,
    IonicModule,
    SharedModule,
  ]
})
export class ShowInfoModule { }
