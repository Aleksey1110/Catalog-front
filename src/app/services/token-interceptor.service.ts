import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './login.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector, private _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this._injector.get(LoginService);
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${loginService.getToken()}`
      }
    });
    return next.handle(tokenizedReq).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this._router.navigate(['/login']);
        }
        return throwError(err);
      })
    );
  }
}
