import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ShowService } from '../services/show.service';
import { StateShowByQuery } from '../interfaces/show';
import { FormControl, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.scss'],
})
export class ShowSearchComponent  implements OnInit {

  public showService = inject( ShowService );
  public utilsService = inject( UtilsService );

  #state = signal<StateShowByQuery>({
    loading: true,
    shows: [],
  });

  public shows = computed( () => this.#state().shows );
  public loading = computed( () => this.#state().loading );

  public searchBox: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor() { }

  ngOnInit() {}

  handleInput(event: any) {
    if( this.searchBox.invalid ) return;
    const query = event.target.value.toLowerCase();
    this.showService.getShowsByQuery( query )
      .subscribe( shows => {
        this.#state.set( {
          loading: false,
          shows: shows,
        } );
      } );
  }

  onShowInfo( id: number ) {
    this.utilsService.setBackUrl = '/main/search';
    this.utilsService.routerLink(`main/show/${id}`);
  }

}
