import { TopNewsDetailsComponent } from "./components/top-news-details/top-news-details.component";
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NgModule } from '@angular/core';
import { CategoriesNewsPageComponent } from './pages/categories-news-page/categories-news-page.component';

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
		component: CategoriesPageComponent,
		children: [
			{
				path: 'news',
				component: CategoriesNewsPageComponent
			}
		]
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
