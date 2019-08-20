import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../core/store/app.reducer';
import * as NewsActions from '../../modules/news/store/news.actions';
import { Subscription } from 'rxjs';
import { selectCountry } from 'src/app/modules/news/store/news.selectors';
import { Router, NavigationStart, RouterEvent } from '@angular/router';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

	private stateCountrySubscription: Subscription;
	private routerSubscription: Subscription;

	public isUsaActiveLang: boolean = true;
	public country: string = 'us';
	public isCountryDisabled: boolean;
	public isDetailsPage: boolean;

	constructor(private store: Store<fromApp.AppState>, private router: Router) { }

	ngOnInit() {
		this.isDetailsPage = this.router.url.includes('news-details');
		this.routerSubscription = this.router.events.subscribe((event: RouterEvent) => {
			if (event instanceof NavigationStart) {
				this.isDetailsPage = event.url.includes('news-details');
			}
		});
		this.stateCountrySubscription =
			this.store
				.pipe(select(selectCountry))
				.subscribe((country: string) => this.country = country)
	}

	ngOnDestroy() {
		this.stateCountrySubscription.unsubscribe();
		this.routerSubscription.unsubscribe();
	}

	public changeLanguage(lang?: string): void {
		this.isUsaActiveLang = !!lang;
		const country = this.isUsaActiveLang ? 'us' : 'gb';

		if (country !== this.country) {
			this.store.dispatch(new NewsActions.ChangeCountry(country));
		}
	}
}
