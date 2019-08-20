import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleModel } from 'src/app/core/models/article.model';

@Component({
	selector: 'app-top-news-list',
	templateUrl: './top-news-list.component.html',
	styleUrls: ['./top-news-list.component.scss']
})
export class TopNewsListComponent implements OnInit {

	@Input() public articles: ArticleModel[];
	@Output() private showArticleDetails: EventEmitter<ArticleModel> = new EventEmitter<ArticleModel>();

	constructor() { }

	ngOnInit() {
	}

	public onShowArticleDetails(article: ArticleModel): void {
		this.showArticleDetails.emit(article);
	}

}
