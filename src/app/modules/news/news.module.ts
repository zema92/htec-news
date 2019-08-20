import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
	declarations: [NewsPageComponent, CategoriesPageComponent, SearchPageComponent],
	imports: [
		CommonModule
	]
})
export class NewsModule { }
