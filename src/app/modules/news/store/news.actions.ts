import { Action } from '@ngrx/store';
import { NewsModel } from 'src/app/core/models/news.model';

export const CHANGE_COUNTRY = '[News] Change Country';
export const FETCH_NEWS_BY_COUNTRY = '[News] Fetch News By Country';
export const STORE_NEWS = '[News] Store News';


export class ChangeCountry implements Action {
	readonly type = CHANGE_COUNTRY;

	constructor(public payload: string) {}
}

export class FetchTopNewsByCountry implements Action {
	readonly type = FETCH_NEWS_BY_COUNTRY;

	constructor(public payload: string) {}
}

export class StoreTopNews implements Action {
	readonly type = STORE_NEWS;

	constructor(public payload: NewsModel) {}
}

export type NewsActionTypes =
	ChangeCountry |
	FetchTopNewsByCountry |
	StoreTopNews;
