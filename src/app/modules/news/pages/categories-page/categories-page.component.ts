import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';
import * as NewsActions from '../../store/news.actions';
import { Subscription, combineLatest } from 'rxjs';
import { selectCountry, selectArticles, selectLoading, selectCategory } from '../../store/news.selectors';
import { ArticleModel } from 'src/app/core/models/article.model';
import { Router, RouterEvent, NavigationStart } from '@angular/router';

@Component({
	selector: 'app-categories-page',
	templateUrl: './categories-page.component.html',
	styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit, OnDestroy {

	private stateCountryCategorySubscription: Subscription;
	private stateArticlesSubscription: Subscription;
	private stateLoadingSubscription: Subscription;
	private routerSubscription: Subscription;

	public country: string;
	public articles: ArticleModel[];
	public loading: boolean;
	public category: string;
	public hideCategories: boolean;

	constructor(private store: Store<fromApp.AppState>, private router: Router) { }

	ngOnInit() {
		this.stateCountryCategorySubscription = combineLatest(
			this.store.pipe(select(selectCountry)),
			this.store.pipe(select(selectCategory))
		)
		.subscribe(([country, category]) => {
			this.country = country;
			this.category = category;
			this.store.dispatch(new NewsActions.FetchTopFiveNewsByCountryAndCategory({
				country: this.country, category: this.category
			}));
		});
		this.stateArticlesSubscription =
			this.store
				.pipe(select(selectArticles))
				.subscribe((articles: ArticleModel[]) => this.articles = articles);
		this.stateLoadingSubscription =
			this.store
				.pipe(select(selectLoading))
				.subscribe((loading: boolean) => this.loading = loading);
		this.routerSubscription = this.router.events.subscribe((event: RouterEvent) => {
			if (event instanceof NavigationStart) {
				this.hideCategories = event.url.includes('news');
			}
		})
	}

	ngOnDestroy(): void {
		this.stateCountryCategorySubscription.unsubscribe();
		this.stateArticlesSubscription.unsubscribe();
		this.stateLoadingSubscription.unsubscribe();
		this.routerSubscription.unsubscribe();
	}

	public onFetchNewsForCategory(category: string): void {
		setTimeout(() => {
			this.store.dispatch(new NewsActions.FetchTopFiveNewsByCountryAndCategory({ country: this.country, category }));
		}, 100);
	}

	public onShowArticleDetails(article: ArticleModel): void {
		this.store.dispatch(new NewsActions.ShowArticleDetails(article));
		this.router.navigate(['news-details']);
	}

	public onShowNewsForCategory(category: string): void {
		this.store.dispatch(new NewsActions.ChangeCategory(category));
		this.router.navigate(['categories', 'news']);
	}

}
