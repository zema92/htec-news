import { Component, OnInit } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { ArticleModel } from 'src/app/core/models/article.model';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectCountry, selectArticles, selectLoading } from '../../store/news.selectors';
import * as fromApp from '../../../../core/store/app.reducer';
import * as NewsActions from '../../store/news.actions';


@Component({
  selector: 'app-categories-news-page',
  templateUrl: './categories-news-page.component.html',
  styleUrls: ['./categories-news-page.component.scss']
})
export class CategoriesNewsPageComponent implements OnInit {

	private stateCountrySubscription: Subscription;
	private stateArticlesSubscription: Subscription;
	private stateLoadingSubscription: Subscription;

	public articles: ArticleModel[];
	public loading: boolean;
	public country: string;
	public category: string;

	constructor(
		private store: Store<fromApp.AppState>,
		private router: Router
	) { }

	ngOnInit() {
		this.category = this.router.url.split('/').pop();
		this.store.dispatch(new NewsActions.ChangeCategory(this.category));

		this.stateCountrySubscription =
			this.store
				.pipe(select(selectCountry))
				.subscribe((country) => {
					this.country = country;
					this.store.dispatch(new NewsActions.FetchTopNewsByCountryAndCategory({
						country: country, category: this.category
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
	}

	ngOnDestroy(): void {
		this.stateCountrySubscription.unsubscribe();
		this.stateArticlesSubscription.unsubscribe();
		this.stateLoadingSubscription.unsubscribe();
	}

	public onShowArticleDetails(article: ArticleModel): void {
		this.store.dispatch(new NewsActions.ShowArticleDetails(article));
		this.router.navigate(['top-news', 'news-details']);
	}

}
