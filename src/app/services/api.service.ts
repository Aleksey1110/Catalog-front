import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server error');
  }

  // Получить список всех марок
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this._url}/api`)
      .catch(this.errorHandler);
  }

  // Получить список моделей
  getModelName(id1): Observable<Models[]> {
    return this.http.get<Models[]>(`${this._url}/api/${id1}`);
  }

  // Получить список модификаций
  getModificationName(id1, id2): Observable<Modifications[]> {
    return this.http.get<Modifications[]>(`${this._url}/api/${id1}/${id2}`);
  }

  // Получить список агрегатов
  getPartsList(id1, id2, id3): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this._url}/api/${id1}/${id2}/${id3}`);
  }

  // Получить список деталей
  getDetailsItem(id1, id2, id3, id4): Observable<Detail[]> {
    return this.http.get<Detail[]>(`${this._url}/api/${id1}/${id2}/${id3}/${id4}`);
  }

  // Получить составляющие выбранной детали
  getItem(id1, id2, id3, id4, id5): Observable<Items[]> {
    return this.http.get<Items[]>(`${this._url}/api/${id1}/${id2}/${id3}/${id4}/${id5}`);
  }

  // Получить аналоги выбранной детали
  getAnalogue(id1, id2, id3, id4, id5, id6): Observable<AnalogueNumber[]> {
    return this.http.get<AnalogueNumber[]>(`${this._url}/api/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`);
  }

  // Добавить марку авто
  createCar(mark): Observable<Car> {
    return this.http.post<Car>(`${this._url}/add/addCar`, mark);
  }

  // Добавить модель авто
  createModel(id1, model): Observable<Models> {
    return this.http.post<Models>(`${this._url}/add/addCar/${id1}`, model);
  }

  // Добавить модификацию авто
  createModification(id1, id2, modification): Observable<Modifications> {
    return this.http.post<Modifications>(`${this._url}/add/addCar/${id1}/${id2}`, modification);
  }

  // Добавить модификацию авто
  createUnit(id1, id2, id3, unit): Observable<Unit> {
    return this.http.post<Unit>(`${this._url}/add/addCar/${id1}/${id2}/${id3}`, unit);
  }

  // Добавить деталь
  createDetail(id1, id2, id3, id4, detail): Observable<Unit> {
    return this.http.post<Unit>(`${this._url}/add/addCar/${id1}/${id2}/${id3}/${id4}`, detail);
  }

  // Добавить составляющие детали
  createDetailItem(id1, id2, id3, id4, id5, item): Observable<Items> {
    return this.http.post<Items>(`${this._url}/add/addCar/${id1}/${id2}/${id3}/${id4}/${id5}`, item);
  }

  // Добавить аналог
  createAnalogue(id1, id2, id3, id4, id5, id6, analogue): Observable<AnalogueNumber> {
    return this.http.post<AnalogueNumber>(`${this._url}/add/addCar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, analogue);
  }

  // Редактировать название марки авто
  editMark(id1, mark): Observable<Car> {
    return this.http.put<Car>(`${this._url}/edit/editcar/${id1}`, mark);
  }

  // Редактировать название модели авто
  editModel(id1, id2, model): Observable<Models> {
    return this.http.put<Models>(`${this._url}/edit/editcar/${id1}/${id2}`, model);
  }

  // Редактировать название модификации авто
  editModification(id1, id2, id3, modification): Observable<Modifications> {
    return this.http.put<Modifications>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}`, modification);
  }

  // Редактировать название агрегата авто
  editUnit(id1, id2, id3, id4, unit): Observable<Unit> {
    return this.http.put<Unit>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}/${id4}`, unit);
  }

  // Редактировать название детали
  editDetail(id1, id2, id3, id4, id5, detail): Observable<Detail> {
    return this.http.put<Detail>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}`, detail);
  }

  // Редактировать составляющие детали
  editDetailItems(id1, id2, id3, id4, id5, id6, item): Observable<Detail> {
    return this.http.put<Detail>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, item);
  }

  // Редактировать аналог детали
  editAnalogue(id1, id2, id3, id4, id5, id6, id7, analogue): Observable<Detail> {
    return this.http.put<Detail>(`${this._url}/edit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`, analogue);
  }

  // Удалить марку
  removeMark(id1): Observable<Car> {
    return this.http.delete<Car>(`${this._url}/remove/removecar/${id1}`);
  }

  // Удалить модель
  removeModel(id1, id2): Observable<Models> {
    return this.http.delete<Models>(`${this._url}/remove/removecar/${id1}/${id2}`);
  }

  // Удалить модификацию
  removeModification(id1, id2, id3): Observable<Modifications> {
    return this.http.delete<Modifications>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}`);
  }

  // Удалить агрегат
  removeUnit(id1, id2, id3, id4): Observable<Unit> {
    return this.http.delete<Unit>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}/${id4}`);
  }

  // Удалить деталь
  removeDetail(id1, id2, id3, id4, id5): Observable<Detail> {
    return this.http.delete<Detail>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}`);
  }

  // Удалить данные детали
  removeItem(id1, id2, id3, id4, id5, id6): Observable<Items> {
    return this.http.delete<Items>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`);
  }

  // Удалить аналог
  removeAnalogue(id1, id2, id3, id4, id5, id6, id7): Observable<AnalogueNumber> {
    return this.http.delete<AnalogueNumber>(`${this._url}/remove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`);
  }
}
