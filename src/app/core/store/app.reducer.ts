import { ActionReducerMap } from '@ngrx/store';
import * as fromNews from '../../modules/news/store/news.reducer';

export interface AppState {
  	news: fromNews.NewsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  	news: fromNews.newsReducer
};
