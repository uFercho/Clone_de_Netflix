import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Show, ShowByQuery, SmallShow, State } from '../interfaces/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private http = inject( HttpClient );

  private urlApi: string = environment.apiUrl;

  #state = signal<State>({
    loading: true,
    shows: [],
  });

  public shows = computed( () => this.#state().shows );
  public loading = computed( () => this.#state().loading );

  constructor() {
    const path: string = 'shows';
    this.http.get<Show[]>(`${this.urlApi}/${path}`)
      .pipe(
        map( shows => shows.map( show => {
                        const { id, name, type, genres, runtime, premiered, rating, image } = show;
                        const smallShow: SmallShow = { id, name, type, genres, runtime, premiered, rating, image };
                        return smallShow
                      })
        ),
      )
      .subscribe( shows => {
        this.#state.set({
          loading: false,
          shows: shows,
        })
      });
  }

  getShowInfoByID( id: number ): Observable<Show> {
    const path: string = 'shows';
    const embeds: string = 'embed[]=episodes&embed[]=cast';
    return this.http.get<Show>(`${this.urlApi}/${path}/${id}?${embeds}`);
  }

  getShowsByQuery( query: string ): Observable<SmallShow[]> {
    const path: string = 'search/shows';
    return this.http.get<ShowByQuery[]>(`${this.urlApi}/${path}?q=${query}`)
      .pipe(
        map( shows => {
          const smallShows: SmallShow[] = shows.map( showResults => {
            const { show } = showResults;
            const { id, name, type, genres, runtime, premiered, rating, image } = show;
            const smallShow: SmallShow = { id, name, type, genres, runtime, premiered, rating, image };
            return smallShow
          })
          return smallShows;
        })
      );
  }
}
