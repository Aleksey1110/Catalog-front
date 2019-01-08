import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private _url = 'http://localhost:3000/login';

  // Обработчик ошибок сервера
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }

  // Функция логина пользователя
  loginUser(user): Observable<User> {
    return this.http.post<User>(this._url, user)
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
}
