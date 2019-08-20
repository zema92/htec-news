import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';
import * as NewsActions from '../../store/news.actions';
import { selectCountry, selectArticles, selectLoading } from '../../store/news.selectors';
import { ArticleModel } from 'src/app/core/models/article.model';


@Component({
	selector: 'app-search-page',
	templateUrl: './search-page.component.html',
	styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

	private stateCountrySubscription: Subscription;
	private stateArticlesSubscription: Subscription;
	private stateLoadingSubscription: Subscription;

	public searchTerm$ = new BehaviorSubject<string>('');
	public country: string;
	public articles: ArticleModel[];
	public loading: boolean;

	constructor(private store: Store<fromApp.AppState>) { }

	ngOnInit() {
		this.stateCountrySubscription =
			this.store
				.pipe(select(selectCountry))
				.subscribe((country: string) => {
					this.country = country;
				});

		this.stateArticlesSubscription =
			this.store
				.pipe(select(selectArticles))
				.subscribe((articles: ArticleModel[]) => this.articles = articles);

		this.stateLoadingSubscription =
			this.store
				.pipe(select(selectLoading))
				.subscribe((loading: boolean) => this.loading = loading);

		this.searchTerm$.pipe(
			debounceTime(200),
			distinctUntilChanged()
		).subscribe((searchTerm: string) => this.store.dispatch(new NewsActions.SearchTopNews({
			country: this.country, searchTerm
		})));
	}

	ngOnDestroy() {
		this.stateCountrySubscription.unsubscribe();
		this.stateArticlesSubscription.unsubscribe();
		this.stateLoadingSubscription.unsubscribe();
	}

}
