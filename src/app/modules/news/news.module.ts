import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { TopNewsListComponent } from './components/top-news-list/top-news-list.component';
import { TopNewsItemComponent } from './components/top-news-item/top-news-item.component';


@NgModule({
	declarations: [
		NewsPageComponent,
		CategoriesPageComponent,
		SearchPageComponent,
		TopNewsListComponent,
		TopNewsItemComponent
	],
	imports: [
		CommonModule
	]
})
export class NewsModule { }
