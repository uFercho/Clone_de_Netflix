import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {

  @ViewChild(IonTabs) tabs!: IonTabs;

  public selected: string | undefined = '';

  constructor() { }

  ngOnInit() {}

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }

}
