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
}
