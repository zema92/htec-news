import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
	selector: 'app-news-page',
	templateUrl: './news-page.component.html',
	styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

	constructor(private newsService: NewsService) { }

	ngOnInit() {
		this.newsService.getTopNewsByCountry('us').subscribe();
	}

}
