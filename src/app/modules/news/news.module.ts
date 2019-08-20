import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TopNewsListComponent } from './components/top-news-list/top-news-list.component';
import { TopNewsItemComponent } from './components/top-news-item/top-news-item.component';
import { TopNewsDetailsComponent } from './components/top-news-details/top-news-details.component';
import { NewsRoutingModule } from './news-routing.module';
import { CategoriesNewsComponent } from './components/categories-news/categories-news.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CategoriesNewsPageComponent } from './pages/categories-news-page/categories-news-page.component';


@NgModule({
	declarations: [
		NewsPageComponent,
		CategoriesPageComponent,
		SearchPageComponent,
		TopNewsListComponent,
		TopNewsItemComponent,
		TopNewsDetailsComponent,
		CategoriesNewsComponent,
		CategoriesNewsPageComponent
	],
	imports: [
		CommonModule,
		NewsRoutingModule,
		AccordionModule,
		CarouselModule
	]
})
export class NewsModule { }
