import { ImgDetailItems } from './../models/img-detailitems';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImgCar } from '../models/img-car';
import { ImgModels } from '../models/img-models';
import { ImgModifications } from '../models/img-modifications';
import { ImgUnits } from '../models/img-unit';
import { ImgDetail } from '../models/img-detail';
import { ImgItems } from '../models/img-items';

@Injectable({
  providedIn: 'root'
})
export class ApiImgCatalogService {

  constructor(private http: HttpClient) { }
  private _url = 'http://localhost:3000';

  // Получить список всех марок
  getCars(): Observable<ImgCar[]> {
    return this.http.get<ImgCar[]>(`${this._url}/catalogs/piccat`);
  }

  // Получить список всех моделей
  getModel(id1): Observable<ImgModels[]> {
    return this.http.get<ImgModels[]>(`${this._url}/catalogs/piccat/${id1}`);
  }

  // Получить список всех модификаций
  getModification(id1, id2): Observable<ImgModifications[]> {
    return this.http.get<ImgModifications[]>(`${this._url}/catalogs/piccat/${id1}/${id2}`);
  }

  // Получить список всех агрегатов
  getUnit(id1, id2, id3): Observable<ImgUnits[]> {
    return this.http.get<ImgUnits[]>(`${this._url}/catalogs/piccat/${id1}/${id2}/${id3}`);
  }

  // Получить список всех разделов
  getDetail(id1, id2, id3, id4): Observable<ImgDetail[]> {
    return this.http.get<ImgDetail[]>(`${this._url}/catalogs/piccat/${id1}/${id2}/${id3}/${id4}`);
  }

  // Получить список деталей выбранного раздела
  getItems(id1, id2, id3, id4, id5): Observable<ImgItems[]> {
    return this.http.get<ImgItems[]>(`${this._url}/catalogs/piccat/${id1}/${id2}/${id3}/${id4}/${id5}`);
  }

  // Создать новую марку авто
  createCar(car): Observable<ImgCar[]> {
    return this.http.post<ImgCar[]>(`${this._url}/imgadd/addCar`, car);
  }

  // Создать новую модель
  createModel(id1, model): Observable<ImgModels[]> {
    return this.http.post<ImgModels[]>(`${this._url}/imgadd/addCar/${id1}`, model);
  }

  // Создать новую модификацию
  createModification(id1, id2, modification): Observable<ImgModifications[]> {
    return this.http.post<ImgModifications[]>(`${this._url}/imgadd/addCar/${id1}/${id2}`, modification);
  }

  // Создать новую агрегат
  createUnit(id1, id2, id3, unit): Observable<ImgUnits[]> {
    return this.http.post<ImgUnits[]>(`${this._url}/imgadd/addCar/${id1}/${id2}/${id3}`, unit);
  }

  // Создать новую схему
  createDetail(id1, id2, id3, id4, detail): Observable<ImgDetail[]> {
    return this.http.post<ImgDetail[]>(`${this._url}/imgadd/addCar/${id1}/${id2}/${id3}/${id4}`, detail);
  }

  // Создать новую основную схему
  createDetailItem(id1, id2, id3, id4, id5, item): Observable<ImgItems[]> {
    return this.http.post<ImgItems[]>(`${this._url}/imgadd/addCar/${id1}/${id2}/${id3}/${id4}/${id5}`, item);
  }

  // Создать новые детали
  createItems(id1, id2, id3, id4, id5, id6, item): Observable<ImgDetailItems[]> {
    return this.http.post<ImgDetailItems[]>(`${this._url}/imgadd/addCar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, item);
  }
}

