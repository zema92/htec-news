import { ArticleModel } from './../../../core/models/article.model';
import * as NewsActions from './news.actions';


export interface NewsState {
	articles: ArticleModel[];
	totalResults: number;
	country: string;
	loading: boolean;
}

const initialState: NewsState = {
	articles: null,
	totalResults: 0,
	country: 'us',
	loading: false,
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
		default:
			return state;
	}
}
