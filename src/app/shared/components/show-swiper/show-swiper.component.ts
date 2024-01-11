import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';

import { register } from 'swiper/element/bundle'

import { SmallShow } from 'src/app/pages/interfaces/show';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-show-swiper',
  templateUrl: './show-swiper.component.html',
  styleUrls: ['./show-swiper.component.scss'],
})
export class ShowSwiperComponent  implements OnInit, AfterViewInit {

  private router = inject(Router);

  @Input({ required: true }) title!: string;
  @Input({ required: true }) shows!: SmallShow[];

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    register();
  }

  onShowInfo( id: number ) {
    console.log('🚀 | ShowSwiperComponent | onShowInfo | id:', id)
    this.router.navigate([`main/show/${id}`]);
    //this.router.navigateByUrl(`show/${id}`);
  }

}
