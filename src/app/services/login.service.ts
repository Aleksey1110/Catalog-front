import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient,
    private _router: Router
    ) { }

  private _url = 'http://localhost:3000/login';

  // Обработчик ошибок сервера
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }

  // Функция логина пользователя
  loginUser(user): Observable<User> {
    return this._http.post<User>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }

  // Проверка наличия токена
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // Получить токен
  getToken() {
    return localStorage.getItem('token');
  }

  // Выйти из регистрации
  logOut() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }
}
