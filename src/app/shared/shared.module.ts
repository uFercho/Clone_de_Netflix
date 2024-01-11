import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';
import { ShowSwiperComponent } from './components/show-swiper/show-swiper.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ShowSwiperComponent,
    StarRatingComponent,
  ],
  exports: [
    HeaderComponent,
    ShowSwiperComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
