import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ImgDetailItems } from './../models/img-detailitems';
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

  // Получить схему выбранного раздела
  getItems(id1, id2, id3, id4, id5): Observable<ImgItems[]> {
    return this.http.get<ImgItems[]>(`${this._url}/catalogs/piccat/${id1}/${id2}/${id3}/${id4}/${id5}`);
  }

  // Получить детали выбранного раздела
  getDetailItems(id1, id2, id3, id4, id5, id6): Observable<ImgDetailItems[]> {
    return this.http.get<ImgDetailItems[]>(`${this._url}/catalogs/piccat/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`);
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

  // Редактировать название марки авто
  editMark(id1, mark): Observable<ImgCar> {
    return this.http.put<ImgCar>(`${this._url}/imgedit/editcar/${id1}`, mark);
  }

  // Редактировать название модели авто
  editModel(id1, id2, model): Observable<ImgModels> {
    return this.http.put<ImgModels>(`${this._url}/imgedit/editcar/${id1}/${id2}`, model);
  }

  // Редактировать название модификации авто
  editModification(id1, id2, id3, modification): Observable<ImgModifications> {
    return this.http.put<ImgModifications>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}`, modification);
  }

  // Редактировать название агрегата авто
  editUnit(id1, id2, id3, id4, unit): Observable<ImgUnits> {
    return this.http.put<ImgUnits>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}/${id4}`, unit);
  }

  // Редактировать название раздел
  editDetail(id1, id2, id3, id4, id5, detail): Observable<ImgDetail> {
    return this.http.put<ImgDetail>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}`, detail);
  }

  // Редактировать ссылку на схему раздела
  editDetailItems(id1, id2, id3, id4, id5, id6, item): Observable<ImgItems> {
    return this.http.put<ImgItems>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, item);
  }

  // Редактировать детали раздела
  editItems(id1, id2, id3, id4, id5, id6, id7, item): Observable<ImgDetailItems> {
    return this.http.put<ImgDetailItems>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`, item);
  }

  // Удалить марку
  removeMark(id1): Observable<ImgCar> {
    return this.http.delete<ImgCar>(`${this._url}/imgremove/removecar/${id1}`);
  }

  // Удалить модель
  removeModel(id1, id2): Observable<ImgModels> {
    return this.http.delete<ImgModels>(`${this._url}/imgremove/removecar/${id1}/${id2}`);
  }

  // Удалить модификацию
  removeModification(id1, id2, id3): Observable<ImgModifications> {
    return this.http.delete<ImgModifications>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}`);
  }

  // Удалить агрегат
  removeUnit(id1, id2, id3, id4): Observable<ImgUnits> {
    return this.http.delete<ImgUnits>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}/${id4}`);
  }

  // Удалить раздел
  removeDetail(id1, id2, id3, id4, id5): Observable<ImgDetail> {
    return this.http.delete<ImgDetail>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}`);
  }

  // Удалить ссылку на схему раздела
  removeItem(id1, id2, id3, id4, id5, id6): Observable<ImgItems> {
    return this.http.delete<ImgItems>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`);
  }

  // Удалить данные раздела
  removeItems(id1, id2, id3, id4, id5, id6, id7): Observable<ImgDetailItems> {
    return this.http.delete<ImgDetailItems>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`);
  }
}

