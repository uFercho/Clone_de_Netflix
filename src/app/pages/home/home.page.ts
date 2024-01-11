import { Component, Input, OnDestroy, OnInit, computed, inject } from '@angular/core';

import { ShowService } from '../services/show.service';
import { ShowGenre, ShowType, SmallShow } from '../interfaces/show';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  public showService = inject( ShowService );
  public utilsService = inject( UtilsService );

  private showNum: number = 20;

  public newReleases = computed<SmallShow[]>( () => this.showService.shows()
    .sort( (a, b) => {
      const fechaA = new Date(a.premiered).getTime();
      const fechaB = new Date(b.premiered).getTime();
      return fechaB - fechaA;//fechaB.toLocaleString().localeCompare(fechaA.toLocaleString());
    }).slice(0, this.showNum) );

  public top = computed<SmallShow[]>( () => this.showService.shows()
    .sort( (a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0) )
    .slice(0, this.showNum) );

  public randomTop = computed<SmallShow>( () => this.seleccionarAleatorio(this.top()) );

  public drama = computed<SmallShow[]>( () => this.showService.shows()
    .filter( show => show.genres.includes( ShowGenre.Drama ) )
    .slice(0, this.showNum) );

  public comedy = computed<SmallShow[]>( () => this.showService.shows()
    .filter( show => show.genres.includes( ShowGenre.Comedy ) )
    .slice(0, this.showNum) );

  public sports = computed<SmallShow[]>( () => this.showService.shows()
    .filter( show => show.genres.includes( ShowGenre.Sports ) )
    .slice(0, this.showNum) );

  public anime = computed<SmallShow[]>( () => this.showService.shows()
    .filter( show => show.genres.includes( ShowGenre.Anime ) )
    .slice(0, this.showNum) );

  public scienceFiction = computed<SmallShow[]>( () => this.showService.shows()
    .filter( show => show.genres.includes( ShowGenre.ScienceFiction ) )
    .slice(0, this.showNum) );

  public documentary = computed<SmallShow[]>( () => this.showService.shows()
    .filter( show => show.type === ShowType.Documentary )
    .slice(0, this.showNum) );

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const girsl = this.showService.shows()
      .filter( show => show.name.toLowerCase().includes( 'girls'.toLowerCase() ) )
      console.log('🚀 | HomePage | setTimeout | girsl:', girsl)
    }, 3000);
  }
  ngOnDestroy(): void {
  }

  seleccionarAleatorio( shows: SmallShow[] ): SmallShow {
    const indiceAleatorio = Math.floor(Math.random() * shows.length);
    return shows[indiceAleatorio];
  }

  onShowInfo( id: number ) {
    this.utilsService.setBackUrl = '/main/home';
    this.utilsService.routerLink(`main/show/${id}`);
  }

}
