import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private loadingCtrl = inject(LoadingController);
  private router = inject(Router);

  private backUrl: string = '/main/home';

  get getBackUrl(): string { return this.backUrl }
  set setBackUrl( url: string ) { this.backUrl = url }

  constructor() { }

  public loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' });
  }

  public routerLink( url: string ) {
    return this.router.navigateByUrl(url);
  }

}
