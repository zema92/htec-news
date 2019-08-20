import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';
import * as NewsActions from '../../store/news.actions';

@Component({
	selector: 'app-news-page',
	templateUrl: './news-page.component.html',
	styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

	constructor(private store: Store<fromApp.AppState>) { }

	ngOnInit() {
		// this.store.dispatch(new NewsActions.FetchTopNewsByCountry({ country: this.country }));
	}

}
