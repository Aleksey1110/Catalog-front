import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AnalogueNumber } from './../models/analogueNumber';
import { Detail } from './../models/detail';
import { Items } from '../models/items';
import { Unit } from './../models/unit';
import { Car } from '../models/car';
import { Models } from '../models/models';
import { Modifications } from '../models/modifications';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  private _url = 'http://localhost:3000';

  // Обработчик ошибок сервера
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }

  // Получить список всех марок
  getCars(): Observable<Car[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Car[]>(`api`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить список моделей
  getModelName(id1): Observable<Models[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Models[]>(`api/${id1}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить список модификаций
  getModificationName(id1, id2): Observable<Modifications[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Modifications[]>(`api/${id1}/${id2}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить список агрегатов
  getPartsList(id1, id2, id3): Observable<Unit[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Unit[]>(`api/${id1}/${id2}/${id3}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить список деталей
  getDetailsItem(id1, id2, id3, id4): Observable<Detail[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Detail[]>(`api/${id1}/${id2}/${id3}/${id4}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить составляющие выбранной детали
  getItem(id1, id2, id3, id4, id5): Observable<Items[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Items[]>(`api/${id1}/${id2}/${id3}/${id4}/${id5}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить аналоги выбранной детали
  getAnalogue(id1, id2, id3, id4, id5, id6): Observable<AnalogueNumber[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<AnalogueNumber[]>(`api/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Добавить марку авто
  createCar(mark): Observable<Car> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Car>(`add/addCar`, mark, { headers: headers });
  }

  // Добавить модель авто
  createModel(id1, model): Observable<Models> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Models>(`add/addCar/${id1}`, model, { headers: headers });
  }

  // Добавить модификацию авто
  createModification(id1, id2, modification): Observable<Modifications> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Modifications>(`add/addCar/${id1}/${id2}`, modification, { headers: headers });
  }

  // Добавить модификацию авто
  createUnit(id1, id2, id3, unit): Observable<Unit> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Unit>(`add/addCar/${id1}/${id2}/${id3}`, unit, { headers: headers });
  }

  // Добавить деталь
  createDetail(id1, id2, id3, id4, detail): Observable<Unit> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Unit>(`add/addCar/${id1}/${id2}/${id3}/${id4}`, detail, { headers: headers });
  }

  // Добавить составляющие детали
  createDetailItem(id1, id2, id3, id4, id5, item): Observable<Items> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Items>(`add/addCar/${id1}/${id2}/${id3}/${id4}/${id5}`, item, { headers: headers });
  }

  // Добавить аналог
  createAnalogue(id1, id2, id3, id4, id5, id6, analogue): Observable<AnalogueNumber> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<AnalogueNumber>(`add/addCar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, analogue, { headers: headers });
  }

  // Редактировать название марки авто
  editMark(id1, mark): Observable<Car> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Car>(`edit/editcar/${id1}`, mark, { headers: headers });
  }

  // Редактировать название модели авто
  editModel(id1, id2, model): Observable<Models> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Models>(`edit/editcar/${id1}/${id2}`, model, { headers: headers });
  }

  // Редактировать название модификации авто
  editModification(id1, id2, id3, modification): Observable<Modifications> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Modifications>(`edit/editcar/${id1}/${id2}/${id3}`, modification, { headers: headers });
  }

  // Редактировать название агрегата авто
  editUnit(id1, id2, id3, id4, unit): Observable<Unit> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Unit>(`edit/editcar/${id1}/${id2}/${id3}/${id4}`, unit, { headers: headers });
  }

  // Редактировать название детали
  editDetail(id1, id2, id3, id4, id5, detail): Observable<Detail> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Detail>(`edit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}`, detail, { headers: headers });
  }

  // Редактировать составляющие детали
  editDetailItems(id1, id2, id3, id4, id5, id6, item): Observable<Detail> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Detail>(`edit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, item, { headers: headers });
  }

  // Редактировать аналог детали
  editAnalogue(id1, id2, id3, id4, id5, id6, id7, analogue): Observable<Detail> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Detail>(`edit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`, analogue, { headers: headers });
  }

  // Удалить марку
  removeMark(id1): Observable<Car> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<Car>(`remove/removecar/${id1}`, { headers: headers });
  }

  // Удалить модель
  removeModel(id1, id2): Observable<Models> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<Models>(`remove/removecar/${id1}/${id2}`, { headers: headers });
  }

  // Удалить модификацию
  removeModification(id1, id2, id3): Observable<Modifications> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<Modifications>(`remove/removecar/${id1}/${id2}/${id3}`, { headers: headers });
  }

  // Удалить агрегат
  removeUnit(id1, id2, id3, id4): Observable<Unit> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<Unit>(`remove/removecar/${id1}/${id2}/${id3}/${id4}`, { headers: headers });
  }

  // Удалить деталь
  removeDetail(id1, id2, id3, id4, id5): Observable<Detail> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<Detail>(`remove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}`, { headers: headers });
  }

  // Удалить данные детали
  removeItem(id1, id2, id3, id4, id5, id6): Observable<Items> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<Items>(`remove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, { headers: headers });
  }

  // Удалить аналог
  removeAnalogue(id1, id2, id3, id4, id5, id6, id7): Observable<AnalogueNumber> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<AnalogueNumber>(`remove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`, { headers: headers });
  }
}
