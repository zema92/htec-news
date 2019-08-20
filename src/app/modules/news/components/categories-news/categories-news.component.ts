import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ArticleModel } from 'src/app/core/models/article.model';

@Component({
	selector: 'app-categories-news',
	templateUrl: './categories-news.component.html',
	styleUrls: ['./categories-news.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesNewsComponent implements OnInit {

	@Input() public country: string;
	@Input() public loading: boolean;

	@Input() public set articles(value: Array<ArticleModel>) {
		if (value) {
			this.slides = [];
			this.slides.push(...value);
		}
	};

	@Output() private fetchNewsForCategory: EventEmitter<string> = new EventEmitter<string>();
	@Output() private showArticleDetails: EventEmitter<ArticleModel> = new EventEmitter<ArticleModel>();
	@Output() private showNewsForCategory: EventEmitter<string> = new EventEmitter<string>();

	public itemsPerSlide: number = 3;
	public singleSlideOffset: boolean = true;
	public noWrap: boolean = true;
	public slides: Array<ArticleModel>;

	constructor() { }

	ngOnInit() {
		this.itemsPerSlide = window.innerWidth <= 1440 ? (window.innerWidth <= 992 ? 1 : 2) : 3;
	}

	public onAccordionOpen(isOpen: boolean, category: string): void {
		if (isOpen) {
			this.slides = [];
			this.fetchNewsForCategory.emit(category);
		}
	}

	public onMore(article: ArticleModel): void {
		this.showArticleDetails.emit(article);
	}

	public onShowNewsForCategory(event: MouseEvent, category: string): void {
		event.stopPropagation();
		this.showNewsForCategory.emit(category);
	}

}
