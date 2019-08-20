import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { ArticleModel } from 'src/app/core/models/article.model';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';
import { selectArticleDetails } from '../../store/news.selectors';

@Component({
	selector: 'app-top-news-details',
	templateUrl: './top-news-details.component.html',
	styleUrls: ['./top-news-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNewsDetailsComponent implements OnInit {

	private stateArticleDetailsSubscription: Subscription;

	public articleDetails: ArticleModel;

	constructor(private store: Store<fromApp.AppState>, private location: Location) { }

	ngOnInit() {
		this.stateArticleDetailsSubscription =
			this.store
				.pipe(select(selectArticleDetails))
				.subscribe((articleDetails: ArticleModel) => {
					if (!articleDetails) {
						this.location.back();
					} else {
						this.articleDetails = articleDetails;
					}
				});
	}

	ngOnDestroy(): void {
		this.stateArticleDetailsSubscription.unsubscribe();
	}

	public onBack(): void {
		this.location.back();
	}

}
