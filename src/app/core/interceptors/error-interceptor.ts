import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http/src/response';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry(1),
            catchError(err => this._handleError(err))
        )
    }

    private _handleError(error: HttpErrorResponse): Observable<HttpEvent<HttpErrorResponse>> {
        // handle 401 Unauthorized
        if (error.status === 0 || error.status === 401 || error.status === 403 || error.statusText === 'UNAUTHORIZED') {
            console.log('Authentication session has expired or the user is not authorised');
        }
        // handle 4xx Client errors
        if (error.status >= 400 && error.status < 500) {
            console.log('Request is incorrect');
        }
        // handle 5xx Server error
        if (error.status >= 500) {
            console.log('Server is not responding');
        }
        return throwError(error);
    }
}
