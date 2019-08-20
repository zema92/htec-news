import { Action } from '@ngrx/store';
import { NewsModel } from 'src/app/core/models/news.model';
import { ArticleModel } from 'src/app/core/models/article.model';

export const CHANGE_COUNTRY = '[News] Change Country';
export const CHANGE_CATEGORY = '[News] Change Category';
export const FETCH_NEWS_BY_COUNTRY = '[News] Fetch News By Country';
export const FETCH_NEWS_BY_COUNTRY_AND_CATEGORY = '[News] Fetch News By Country And Category';
export const STORE_NEWS = '[News] Store News';
export const SHOW_ARTICLE_DETAILS = '[News] Show Article Details';
export const HIDE_ARTICLE_DETAILS = '[News] Hide Article Details';
export const FETCH_TOP_FIVE_NEWS_BY_COUNTRY_AND_CATEGORY = '[News] Fetch Top Five News By Country And Category';
export const SEARCH_TOP_NEWS = '[News] Search Top News';


export class ChangeCountry implements Action {
	readonly type = CHANGE_COUNTRY;

	constructor(public payload: string) {}
}

export class ChangeCategory implements Action {
	readonly type = CHANGE_CATEGORY;

	constructor(public payload: string) {}
}

export class FetchTopNewsByCountry implements Action {
	readonly type = FETCH_NEWS_BY_COUNTRY;

	constructor(public payload: string) {}
}

export class FetchTopFiveNewsByCountryAndCategory implements Action {
	readonly type = FETCH_TOP_FIVE_NEWS_BY_COUNTRY_AND_CATEGORY;

	constructor(public payload: { country: string, category: string }) {}
}

export class StoreTopNews implements Action {
	readonly type = STORE_NEWS;

	constructor(public payload: NewsModel) {}
}

export class ShowArticleDetails implements Action {
	readonly type = SHOW_ARTICLE_DETAILS;

	constructor(public payload: ArticleModel) {}
}

export class HideArticleDetails implements Action {
	readonly type = HIDE_ARTICLE_DETAILS;

	constructor() {}
}

export class FetchTopNewsByCountryAndCategory implements Action {
	readonly type = FETCH_NEWS_BY_COUNTRY_AND_CATEGORY;

	constructor(public payload: { country: string, category: string }) {}
}

export class SearchTopNews implements Action {
	readonly type = SEARCH_TOP_NEWS;

	constructor(public payload: { country: string, searchTerm: string }) {}
}

export type NewsActionTypes =
	ChangeCountry |
	ChangeCategory |
	FetchTopNewsByCountry |
	FetchTopNewsByCountryAndCategory |
	FetchTopFiveNewsByCountryAndCategory |
	StoreTopNews |
	SearchTopNews |
	ShowArticleDetails |
	HideArticleDetails;
