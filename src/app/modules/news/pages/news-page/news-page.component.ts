import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';
import * as NewsActions from '../../store/news.actions';
import { Subscription } from 'rxjs';
import { selectCountry, selectArticles, selectLoading } from '../../store/news.selectors';
import { ArticleModel } from 'src/app/core/models/article.model';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
	selector: 'app-news-page',
	templateUrl: './news-page.component.html',
	styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, OnDestroy {

	private stateCountrySubscription: Subscription;
	private stateArticlesSubscription: Subscription;
	private stateLoadingSubscription: Subscription;
	private routerSubscription: Subscription;

	public articles: ArticleModel[];
	public country: string;
	public loading: boolean;
	public hideTopNews: boolean;

	constructor(private store: Store<fromApp.AppState>, private router: Router, private localSt: LocalStorageService) { }

	ngOnInit() {
		this.hideTopNews = this.router.url.includes('news-details');
		this.routerSubscription = this.router.events.subscribe((event: RouterEvent) => {
			if (event instanceof NavigationStart) {
				this.hideTopNews = event.url.includes('news-details');
			}
		});
		this.stateCountrySubscription =
			this.store
				.pipe(select(selectCountry))
				.subscribe((country: string) => {
					this.country = country;
					this.store.dispatch(new NewsActions.FetchTopNewsByCountry(country));
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

	ngOnDestroy(): void {
		this.stateCountrySubscription.unsubscribe();
		this.stateArticlesSubscription.unsubscribe();
		this.stateLoadingSubscription.unsubscribe();
		this.routerSubscription.unsubscribe();
	}

	public onShowArticleDetails(article: ArticleModel): void {
		this.store.dispatch(new NewsActions.ShowArticleDetails(article));
		this.router.navigate(['top-news', 'news-details']);
	}

}
