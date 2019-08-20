import { TopNewsDetailsComponent } from "./components/top-news-details/top-news-details.component";
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'top-news',
		pathMatch: 'full'
	},
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
		path: 'news-details',
		component: TopNewsDetailsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NewsRoutingModule { }
