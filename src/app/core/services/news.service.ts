import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewsModel } from '../models/news.model';

@Injectable({
  	providedIn: 'root'
})
export class NewsService {

	  constructor(private http: HttpClient) { }

	  public getTopNewsByCountry(country: string): Observable<NewsModel> {
		const params = new HttpParams().set('country', country);

		return this.http.get<NewsModel>(`${environment.apiUrl}`, { params });
	}
}
