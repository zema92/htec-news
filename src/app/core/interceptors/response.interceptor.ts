import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

	constructor(private toastrService: ToastrService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((error: any, caught: Observable<HttpEvent<any>>) => {
				this.toastrService.error(error.error.message, error.statusText);

				throw new Error(error);
			})
		);
	}
}
