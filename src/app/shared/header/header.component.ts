import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../core/store/app.reducer';
import * as NewsActions from '../../modules/news/store/news.actions';
import { Subscription } from 'rxjs';
import { selectCountry } from 'src/app/modules/news/store/news.selectors';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

	private stateCountrySubscription: Subscription;

	public isUsaActiveLang: boolean = true;
	public country: string = 'us';

	constructor(private store: Store<fromApp.AppState>) { }

	ngOnInit() {
		this.stateCountrySubscription =
			this.store
				.pipe(select(selectCountry))
				.subscribe((country: string) => this.country = country)
	}

	ngOnDestroy() {
		this.stateCountrySubscription.unsubscribe();
	}

	public changeLanguage(lang?: string): void {
		this.isUsaActiveLang = !!lang;
		const country = this.isUsaActiveLang ? 'us' : 'gb';

		if (country !== this.country) {
			this.store.dispatch(new NewsActions.ChangeCountry(country));
		}
	}
}
