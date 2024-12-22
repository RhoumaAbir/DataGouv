// logging-interceptor.ts

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request:', request);

    return next.handle(request).pipe(
      tap(
        (event) => {
          console.log('Response:', event);
        },
        (error) => {
          console.error('Error:', error);
        }
      )
    );
  }
}
