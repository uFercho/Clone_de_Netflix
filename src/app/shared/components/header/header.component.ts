import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input({ required: true }) title!: string;
  @Input() public backButton?: string;

  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {}

}
