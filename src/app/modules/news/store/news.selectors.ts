import { AppState } from 'src/app/core/store/app.reducer';
import { createSelector } from '@ngrx/store';
import * as fromNews from './news.reducer';


export const selectNewsState = (state: AppState) => state.news;

export const selectNews = createSelector(
	selectNewsState,
	(state: fromNews.NewsState) => state
);

export const selectArticles = createSelector(
	selectNewsState,
	(state: fromNews.NewsState) => state.articles
);

export const selectCountry = createSelector(
	selectNewsState,
	(state: fromNews.NewsState) => state.country
);

export const selectLoading = createSelector(
	selectNewsState,
	(state: fromNews.NewsState) => state.loading
);

export const selectArticleDetails = createSelector(
	selectNewsState,
	(state: fromNews.NewsState) => state.articleDetails
);
