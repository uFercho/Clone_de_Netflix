import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';

import { register } from 'swiper/element/bundle'

import { SmallShow } from 'src/app/pages/interfaces/show';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'shared-show-swiper',
  templateUrl: './show-swiper.component.html',
  styleUrls: ['./show-swiper.component.scss'],
})
export class ShowSwiperComponent  implements OnInit, AfterViewInit {

  public utilsService = inject( UtilsService );

  @Input({ required: true }) title!: string;
  @Input({ required: true }) shows!: SmallShow[];

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    register();
  }

  onShowInfo( id: number ) {
    this.utilsService.setBackUrl = '/main/home';
    this.utilsService.routerLink(`main/show/${id}`);
  }

}
