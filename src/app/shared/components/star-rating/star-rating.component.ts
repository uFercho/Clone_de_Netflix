import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent  implements OnInit {

  @Input({ required: true }) rating!: number;

  constructor() { }

  ngOnInit() {}

  get stars() {
    return Array(Math.floor(this.rating/2)).fill(0);
  }

}
