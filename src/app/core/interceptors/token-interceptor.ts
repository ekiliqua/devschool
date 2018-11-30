import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {isEmpty} from 'lodash';
// import {AuthHelper} from '../services/auth.helper';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    //   constructor(private authHelper: AuthHelper) {
    //   }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const token = localStorage.getItem('oauth2');
        // const csrf = localStorage.getItem('csrf');

        // let headers = request.headers;
        // if (!headers.get('content-type')) {
        //   headers = headers.set('content-type', 'application/json; charset=utf-8');
        // }

        request = request.clone({
            setHeaders: {
                'content-type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log('Headers setted.')

        // headers = isEmpty(token) ? headers : headers.set('Authorization', `Bearer ${token}`);
        // // Include CRSF Header
        // headers = isEmpty(csrf) ? headers : headers.set('X-XSRF-TOKEN', csrf);

        // return next.handle(req.clone({ headers, withCredentials: true}))
        //   .map((response: HttpEvent<any>) => {
        //     if (response instanceof HttpResponse) {
        //       this.authHelper.setCsrfTokenFromResponse(response.headers);
        //       return response;
        //     }
        //   });
        return next.handle(request);
    }
}
