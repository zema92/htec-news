import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from '../modules/news/store/news.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromApp from './store/app.reducer';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule } from 'ngx-webstorage';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
		StoreModule.forRoot(fromApp.appReducer),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
		EffectsModule.forRoot([NewsEffects]),
		AccordionModule.forRoot(),
		CarouselModule.forRoot(),
		AlertModule.forRoot(),
		ToastrModule.forRoot({
			timeOut: 15000,
			positionClass: 'toast-top-right',
			tapToDismiss: false,
			closeButton: true,
			easing: 'ease-in',
			easeTime: 500,
			preventDuplicates: true
		}),
		NgxWebstorageModule.forRoot()
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
	],
	exports: [StoreModule, EffectsModule]
})
export class CoreModule { }
