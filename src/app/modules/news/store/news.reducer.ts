import { ArticleModel } from './../../../core/models/article.model';
import * as NewsActions from './news.actions';


export interface NewsState {
	articles: ArticleModel[];
	totalResults: number;
	country: string;
	category: string;
	loading: boolean;
	articleDetails: ArticleModel;
}

const initialState: NewsState = {
	articles: null,
	totalResults: 0,
	country: 'us',
	loading: false,
	articleDetails: null,
	category: null
};

export function newsReducer(
	state = initialState,
	action: NewsActions.NewsActionTypes
) {
	switch (action.type) {
		case NewsActions.CHANGE_COUNTRY:
			return {
				...state,
				country: action.payload,
				loading: true
			};

		case NewsActions.CHANGE_CATEGORY:
			return {
				...state,
				category: action.payload,
				loading: true
			};

		case NewsActions.FETCH_NEWS_BY_COUNTRY:
			return {
				...state,
				country: action.payload,
				loading: true
			};

		case NewsActions.STORE_NEWS:
			return {
				...state,
				articles: action.payload.articles,
				totalResults: action.payload.totalRecords,
				loading: false
			};

		case NewsActions.SHOW_ARTICLE_DETAILS:
			return {
				...state,
				articleDetails: action.payload
			};

		case NewsActions.HIDE_ARTICLE_DETAILS:
			return {
				...state,
				articleDetails: null
			};

		case NewsActions.FETCH_TOP_FIVE_NEWS_BY_COUNTRY_AND_CATEGORY:
			return {
				...state,
				country: action.payload.country,
				category: action.payload.category,
				loading: true
			};

		case NewsActions.FETCH_NEWS_BY_COUNTRY_AND_CATEGORY:
			return {
				...state,
				country: action.payload.country,
				category: action.payload.category,
				articles: null,
				loading: true
			};

		default:
			return state;
	}
}
