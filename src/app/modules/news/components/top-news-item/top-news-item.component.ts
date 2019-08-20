import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from 'src/app/core/models/article.model';

@Component({
	selector: 'app-top-news-item',
	templateUrl: './top-news-item.component.html',
	styleUrls: ['./top-news-item.component.scss']
})
export class TopNewsItemComponent implements OnInit {

	@Input() public article: ArticleModel;

	constructor() { }

	ngOnInit() {
	}

}
