import { ArticleModel } from './article.model';

export interface NewsModel {
	articles: ArticleModel[];
	totalRecords: number;
	status: string;
}
