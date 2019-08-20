import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';
import * as NewsActions from '../../store/news.actions';
import { Subscription } from 'rxjs';
import { selectCountry, selectArticles, selectArticleDetails, selectLoading } from '../../store/news.selectors';
import { ArticleModel } from 'src/app/core/models/article.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-news-page',
	templateUrl: './news-page.component.html',
	styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, OnDestroy {

	private stateCountrySubscription: Subscription;
	private stateArticlesSubscription: Subscription;
	private stateLoadingSubscription: Subscription;

	public articles: ArticleModel[];
	public country: string;
	public loading: boolean;

	constructor(private store: Store<fromApp.AppState>, private router: Router) { }

	ngOnInit() {
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
	}

	public onShowArticleDetails(article: ArticleModel): void {
		this.store.dispatch(new NewsActions.ShowArticleDetails(article));
		this.router.navigate(['news-details']);
	}

}
