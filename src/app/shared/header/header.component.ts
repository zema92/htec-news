import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../core/store/app.reducer';
import * as NewsActions from '../../modules/news/store/news.actions';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public isUsaActiveLang: boolean = true;
	public country: string = 'us';

	constructor(private store: Store<fromApp.AppState>) { }

	ngOnInit() {
	}

	public changeLanguage(lang?: string): void {
		this.isUsaActiveLang = !!lang;
		this.country = this.isUsaActiveLang ? 'us' : 'gb';
		this.store.dispatch(new NewsActions.ChangeCountry(this.country));
	}
}
