import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as NewsActions from './news.actions';
import { NewsService } from 'src/app/core/services/news.service';
import { map, mergeMap, flatMap, take, reduce } from 'rxjs/operators';
import { NewsModel } from 'src/app/core/models/news.model';
import { ArticleModel } from './../../../core/models/article.model';

@Injectable()
export class NewsEffects {

	constructor(private actions$: Actions, private newsService: NewsService) { }

	@Effect()
	fetchNewsByCountry$ = this.actions$.pipe(
		ofType(NewsActions.FETCH_NEWS_BY_COUNTRY),
		mergeMap((effect: NewsActions.FetchTopNewsByCountry) => this.newsService.getTopNewsByCountry(effect.payload)
			.pipe(
				map((news: NewsModel) => ({ type: NewsActions.STORE_NEWS, payload: news }))
			))
	);

	@Effect()
	fetchFiveNewsByCategory$ = this.actions$.pipe(
		ofType(NewsActions.FETCH_TOP_FIVE_NEWS_BY_COUNTRY_AND_CATEGORY),
		mergeMap((effect: NewsActions.FetchTopFiveNewsByCountryAndCategory) =>
			this.newsService
				.getTopNewsByCountryAndCategory(effect.payload.country, effect.payload.category)
				.pipe(
					flatMap((news: NewsModel) => news.articles),
					take(5),
					reduce((acc, val: ArticleModel) => acc.concat([val]), []),
					map((articles: ArticleModel[]) => Object.assign({}, { status: 'ok', totalResults: articles.length, articles })),
					map((news: NewsModel) => ({ type: NewsActions.STORE_NEWS, payload: news }))
				)
		)
	);

	@Effect()
	fetchNewsByCountryAndCategory$ = this.actions$.pipe(
		ofType(NewsActions.FETCH_NEWS_BY_COUNTRY_AND_CATEGORY),
		mergeMap((effect: NewsActions.FetchTopNewsByCountryAndCategory) =>
			this.newsService
				.getTopNewsByCountryAndCategory(effect.payload.country, effect.payload.category)
				.pipe(
					map((news: NewsModel) => ({ type: NewsActions.STORE_NEWS, payload: news }))
				)
		)
	);

	@Effect()
	searchNews$ = this.actions$.pipe(
		ofType(NewsActions.SEARCH_TOP_NEWS),
		mergeMap((effect: NewsActions.SearchTopNews) =>
			this.newsService
				.searchNewsByCountry(effect.payload.country, effect.payload.searchTerm)
				.pipe(
					map((news: NewsModel) => ({ type: NewsActions.STORE_NEWS, payload: news }))
				)
		)
	);

}
