import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './modules/news/pages/news-page/news-page.component';
import { CategoriesPageComponent } from './modules/news/pages/categories-page/categories-page.component';
import { SearchPageComponent } from './modules/news/pages/search-page/search-page.component';


const routes: Routes = [
	{
		path: 'top-news',
		component: NewsPageComponent
	},
	{
		path: 'categories',
		component: CategoriesPageComponent
	},
	{
		path: 'search',
		component: SearchPageComponent
	},
	{
		path: '**',
		redirectTo: 'top-news'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
