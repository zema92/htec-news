import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ArticleModel } from 'src/app/core/models/article.model';

@Component({
	selector: 'app-top-news-item',
	templateUrl: './top-news-item.component.html',
	styleUrls: ['./top-news-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNewsItemComponent implements OnInit {

	@Input() public article: ArticleModel;
	@Output() private showArticleDetails: EventEmitter<ArticleModel> = new EventEmitter<ArticleModel>();

	constructor() { }

	ngOnInit() {
	}

	public onMore(): void {
		this.showArticleDetails.emit(this.article);
	}
}
