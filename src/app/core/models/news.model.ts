import { ArticleModel } from './article.model';

export interface NewsModel {
	articles: ArticleModel[];
	totalResults: number;
	status: string;
}
