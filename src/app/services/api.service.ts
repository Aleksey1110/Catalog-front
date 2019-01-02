import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    return this.http.get<Car[]>(`${this._url}/api`)
      .pipe(catchError(this.errorHandler));
  }


  // Получить список моделей
  getModelName(id1): Observable<Models[]> {
    return this.http.get<Models[]>(`${this._url}/api/${id1}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить список модификаций
  getModificationName(id1, id2): Observable<Modifications[]> {
    return this.http.get<Modifications[]>(`${this._url}/api/${id1}/${id2}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить список агрегатов
  getPartsList(id1, id2, id3): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this._url}/api/${id1}/${id2}/${id3}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить список деталей
  getDetailsItem(id1, id2, id3, id4): Observable<Detail[]> {
    return this.http.get<Detail[]>(`${this._url}/api/${id1}/${id2}/${id3}/${id4}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить составляющие выбранной детали
  getItem(id1, id2, id3, id4, id5): Observable<Items[]> {
    return this.http.get<Items[]>(`${this._url}/api/${id1}/${id2}/${id3}/${id4}/${id5}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить аналоги выбранной детали
  getAnalogue(id1, id2, id3, id4, id5, id6): Observable<AnalogueNumber[]> {
    return this.http.get<AnalogueNumber[]>(`${this._url}/api/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`)
      .pipe(catchError(this.errorHandler));
  }

  // Добавить марку авто
  createCar(mark): Observable<Car> {
    return this.http.post<Car>(`${this._url}/add/addCar`, mark)
      .pipe(catchError(this.errorHandler));
  }

  // Добавить модель авто
  createModel(id1, model): Observable<Models> {
    return this.http.post<Models>(`${this._url}/add/addCar/${id1}`, model)
      .pipe(catchError(this.errorHandler));
  }

  // Добавить модификацию авто
  createModification(id1, id2, modification): Observable<Modifications> {
    return this.http.post<Modifications>(`${this._url}/add/addCar/${id1}/${id2}`, modification)
      .pipe(catchError(this.errorHandler));
  }

  // Добавить модификацию авто
  createUnit(id1, id2, id3, unit): Observable<Unit> {
    return this.http.post<Unit>(`${this._url}/add/addCar/${id1}/${id2}/${id3}`, unit)
      .pipe(catchError(this.errorHandler));
  }

  // Добавить деталь
  createDetail(id1, id2, id3, id4, detail): Observable<Unit> {
    return this.http.post<Unit>(`${this._url}/add/addCar/${id1}/${id2}/${id3}/${id4}`, detail)
      .pipe(catchError(this.errorHandler));
  }

  // Добавить составляющие детали
  createDetailItem(id1, id2, id3, id4, id5, item): Observable<Items> {
    return this.http.post<Items>(`${this._url}/add/addCar/${id1}/${id2}/${id3}/${id4}/${id5}`, item)
      .pipe(catchError(this.errorHandler));
  }

  // Добавить аналог
  createAnalogue(id1, id2, id3, id4, id5, id6, analogue): Observable<AnalogueNumber> {
    return this.http.post<AnalogueNumber>(`${this._url}/add/addCar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, analogue)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название марки авто
  editMark(id1, mark): Observable<Car> {
    return this.http.put<Car>(`${this._url}/edit/editcar/${id1}`, mark)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название модели авто
  editModel(id1, id2, model): Observable<Models> {
    return this.http.put<Models>(`${this._url}/edit/editcar/${id1}/${id2}`, model)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название модификации авто
  editModification(id1, id2, id3, modification): Observable<Modifications> {
    return this.http.put<Modifications>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}`, modification)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название агрегата авто
  editUnit(id1, id2, id3, id4, unit): Observable<Unit> {
    return this.http.put<Unit>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}/${id4}`, unit)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название детали
  editDetail(id1, id2, id3, id4, id5, detail): Observable<Detail> {
    return this.http.put<Detail>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}`, detail)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать составляющие детали
  editDetailItems(id1, id2, id3, id4, id5, id6, item): Observable<Detail> {
    return this.http.put<Detail>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, item)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать аналог детали
  editAnalogue(id1, id2, id3, id4, id5, id6, id7, analogue): Observable<Detail> {
    return this.http.put<Detail>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`, analogue)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить марку
  removeMark(id1): Observable<Car> {
    return this.http.delete<Car>(`${this._url}/remove/removecar/${id1}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить модель
  removeModel(id1, id2): Observable<Models> {
    return this.http.delete<Models>(`${this._url}/remove/removecar/${id1}/${id2}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить модификацию
  removeModification(id1, id2, id3): Observable<Modifications> {
    return this.http.delete<Modifications>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить агрегат
  removeUnit(id1, id2, id3, id4): Observable<Unit> {
    return this.http.delete<Unit>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}/${id4}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить деталь
  removeDetail(id1, id2, id3, id4, id5): Observable<Detail> {
    return this.http.delete<Detail>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить данные детали
  removeItem(id1, id2, id3, id4, id5, id6): Observable<Items> {
    return this.http.delete<Items>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить аналог
  removeAnalogue(id1, id2, id3, id4, id5, id6, id7): Observable<AnalogueNumber> {
    return this.http.delete<AnalogueNumber>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`)
      .pipe(catchError(this.errorHandler));
  }
}
