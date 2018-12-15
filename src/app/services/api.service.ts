import { AnalogueNumber } from './../models/analogueNumber';
import { Detail } from './../models/detail';
import { Items } from '../models/items';
import { Unit } from './../models/unit';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Models } from '../models/models';
import { Modifications } from '../models/modifications';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Получить список всех марок
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:3000/api');
  }

  // Получить список моделей
  getModelName(id1): Observable<Models[]> {
    return this.http.get<Models[]>(`http://localhost:3000/api/${id1}`);
  }

  // Получить список модификаций
  getModificationName(id1, id2): Observable<Modifications[]> {
    return this.http.get<Modifications[]>(`http://localhost:3000/api/${id1}/${id2}`);
  }

  // Получить список агрегатов
  getPartsList(id1, id2, id3): Observable<Unit[]> {
    return this.http.get<Unit[]>(`http://localhost:3000/api/${id1}/${id2}/${id3}`);
  }

  // Получить список деталей
  getDetailsItem(id1, id2, id3, id4): Observable<Detail[]> {
    return this.http.get<Detail[]>(`http://localhost:3000/api/${id1}/${id2}/${id3}/${id4}`);
  }

  // Получить составляющие выбранной детали
  getItem(id1, id2, id3, id4, id5): Observable<Items[]> {
    return this.http.get<Items[]>(`http://localhost:3000/api/${id1}/${id2}/${id3}/${id4}/${id5}`);
  }

  // Добавить марку авто
  createCar(mark): Observable<Car> {
    return this.http.post<Car>('http://localhost:3000/add/addCar', mark);
  }

  // Добавить модель авто
  createModel(id1, model): Observable<Models> {
    return this.http.post<Models>(`http://localhost:3000/add/addCar/${id1}`, model);
  }

  // Добавить модификацию авто
  createModification(id1, id2, modification): Observable<Modifications> {
    return this.http.post<Modifications>(`http://localhost:3000/add/addCar/${id1}/${id2}`, modification);
  }

  // Добавить модификацию авто
  createUnit(id1, id2, id3, unit): Observable<Unit> {
    return this.http.post<Unit>(`http://localhost:3000/add/addCar/${id1}/${id2}/${id3}`, unit);
  }

  // Добавить деталь
  createDetail(id1, id2, id3, id4, detail): Observable<Unit> {
    return this.http.post<Unit>(`http://localhost:3000/add/addCar/${id1}/${id2}/${id3}/${id4}`, detail);
  }

  // Добавить составляющие детали
  createDetailItem(id1, id2, id3, id4, id5, item): Observable<Items> {
    return this.http.post<Items>(`http://localhost:3000/add/addCar/${id1}/${id2}/${id3}/${id4}/${id5}`, item);
  }

  // Добавить аналог
  createAnalogue(id1, id2, id3, id4, id5, id6, analogue): Observable<AnalogueNumber> {
    return this.http.post<AnalogueNumber>(`http://localhost:3000/add/addCar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, analogue);
  }
}
