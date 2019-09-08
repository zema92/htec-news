import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';
import * as NewsActions from '../../store/news.actions';
import { selectCountry, selectArticles, selectLoading } from '../../store/news.selectors';
import { ArticleModel } from 'src/app/core/models/article.model';
import { Router } from '@angular/router';


@Component({
	selector: 'app-search-page',
	templateUrl: './search-page.component.html',
	styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {

	private stateCountrSearchTermSubscription: Subscription;
	private stateArticlesSubscription: Subscription;
	private stateLoadingSubscription: Subscription;

	public searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
	public searchTerm: string;
	public country: string;
	public articles: ArticleModel[];
	public loading: boolean;

	constructor(private store: Store<fromApp.AppState>, private router: Router) { }

	ngOnInit() {
		this.stateCountrSearchTermSubscription = combineLatest(
			this.store.pipe(select(selectCountry)),
			this.searchTerm$.pipe(
				debounceTime(200),
				distinctUntilChanged()
			))
			.subscribe(([country, searchTerm]) => {
				this.country = country;
				this.searchTerm = searchTerm;
				this.store.dispatch(new NewsActions.SearchTopNews({ country: country, searchTerm }));
			});

		this.stateArticlesSubscription =
			this.store
				.pipe(select(selectArticles))
				.subscribe((articles: ArticleModel[]) => this.articles = articles);

		this.stateLoadingSubscription =
			this.store
				.pipe(select(selectLoading))
				.subscribe((loading: boolean) => this.loading = loading);
	}

	ngOnDestroy() {
		this.stateCountrSearchTermSubscription.unsubscribe();
		this.stateArticlesSubscription.unsubscribe();
		this.stateLoadingSubscription.unsubscribe();
	}

	public onShowArticleDetails(article: ArticleModel): void {
		this.store.dispatch(new NewsActions.ShowArticleDetails(article));
		this.router.navigate(['top-news', 'news-details']);
	}

}
