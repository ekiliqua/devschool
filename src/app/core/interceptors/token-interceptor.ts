import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {isEmpty} from 'lodash';
// import {AuthHelper} from '../services/auth.helper';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        console.log('Headers setted.');

        return next.handle(request);
    }
}
