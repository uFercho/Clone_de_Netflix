import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShowService } from '../services/show.service';
import { EmbeddedEpisode, Show } from '../interfaces/show';
import { switchMap } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss'],
})
export class ShowInfoComponent  implements OnInit {

  public showService = inject( ShowService );
  public utilsService = inject( UtilsService );
  public activatedRoute = inject( ActivatedRoute );

  public show?: Show;


  public episodesOnSeason = signal<EmbeddedEpisode[]>([]);
  public seasons = signal<number[]>([]);


  constructor () {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.showService.getShowInfoByID( id ) )
      )
      .subscribe( show => {
        if ( !show ) return this.utilsService.routerLink('/main/home');

        this.episodesOnSeason.set( this.filtrarTemporadas( show._embedded.episodes, 1 ) );
        this.seasons.set( this.obtenerTemporadas( show._embedded.episodes ) );
        console.log(this.utilsService.getBackUrl)
        return this.show = show;
      })
  }

  filtrarTemporadas( episodios: EmbeddedEpisode[], temporada: number ): EmbeddedEpisode[] {
    return episodios.filter( (episodes) => episodes.season == temporada );
  }

  obtenerTemporadas( episodes: EmbeddedEpisode[] ): number[] {
    const temporadasUnicas: Set<number> = new Set();

    episodes.forEach(episodio => {
      temporadasUnicas.add(episodio.season);
    });

    const arrayTemporadas: number[] = Array.from(temporadasUnicas);

    return arrayTemporadas;
  }

  handleChange( event: CustomEvent ) {
    const temporada: number = event.detail.value;
    this.episodesOnSeason.set( this.filtrarTemporadas( this.show!._embedded.episodes, temporada ) );
  }

}
