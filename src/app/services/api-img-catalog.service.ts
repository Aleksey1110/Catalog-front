import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  // Обработчик ошибок сервера
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }

  // Получить список всех марок
  getCars(): Observable<ImgCar[]> {
    return this.http.get<ImgCar[]>(`${this._url}/catalogs/piccat`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить список всех моделей
  getModel(id1): Observable<ImgModels[]> {
    return this.http.get<ImgModels[]>(`${this._url}/catalogs/piccat/${id1}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить список всех модификаций
  getModification(id1, id2): Observable<ImgModifications[]> {
    return this.http.get<ImgModifications[]>(`${this._url}/catalogs/piccat/${id1}/${id2}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить список всех агрегатов
  getUnit(id1, id2, id3): Observable<ImgUnits[]> {
    return this.http.get<ImgUnits[]>(`${this._url}/catalogs/piccat/${id1}/${id2}/${id3}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить список всех разделов
  getDetail(id1, id2, id3, id4): Observable<ImgDetail[]> {
    return this.http.get<ImgDetail[]>(`${this._url}/catalogs/piccat/${id1}/${id2}/${id3}/${id4}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить схему выбранного раздела
  getItems(id1, id2, id3, id4, id5): Observable<ImgItems[]> {
    return this.http.get<ImgItems[]>(`${this._url}/catalogs/piccat/${id1}/${id2}/${id3}/${id4}/${id5}`)
      .pipe(catchError(this.errorHandler));
  }

  // Получить детали выбранного раздела
  getDetailItems(id1, id2, id3, id4, id5, id6): Observable<ImgDetailItems[]> {
    return this.http.get<ImgDetailItems[]>(`${this._url}/catalogs/piccat/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`)
      .pipe(catchError(this.errorHandler));
  }

  // Создать новую марку авто
  createCar(car): Observable<ImgCar[]> {
    return this.http.post<ImgCar[]>(`${this._url}/imgadd/addCar`, car)
      .pipe(catchError(this.errorHandler));
  }

  // Создать новую модель
  createModel(id1, model): Observable<ImgModels[]> {
    return this.http.post<ImgModels[]>(`${this._url}/imgadd/addCar/${id1}`, model)
      .pipe(catchError(this.errorHandler));
  }

  // Создать новую модификацию
  createModification(id1, id2, modification): Observable<ImgModifications[]> {
    return this.http.post<ImgModifications[]>(`${this._url}/imgadd/addCar/${id1}/${id2}`, modification)
      .pipe(catchError(this.errorHandler));
  }

  // Создать новую агрегат
  createUnit(id1, id2, id3, unit): Observable<ImgUnits[]> {
    return this.http.post<ImgUnits[]>(`${this._url}/imgadd/addCar/${id1}/${id2}/${id3}`, unit)
      .pipe(catchError(this.errorHandler));
  }

  // Создать новую схему
  createDetail(id1, id2, id3, id4, detail): Observable<ImgDetail[]> {
    return this.http.post<ImgDetail[]>(`${this._url}/imgadd/addCar/${id1}/${id2}/${id3}/${id4}`, detail)
      .pipe(catchError(this.errorHandler));
  }

  // Создать новую основную схему
  createDetailItem(id1, id2, id3, id4, id5, item): Observable<ImgItems[]> {
    return this.http.post<ImgItems[]>(`${this._url}/imgadd/addCar/${id1}/${id2}/${id3}/${id4}/${id5}`, item)
      .pipe(catchError(this.errorHandler));
  }

  // Создать новые детали
  createItems(id1, id2, id3, id4, id5, id6, item): Observable<ImgDetailItems[]> {
    return this.http.post<ImgDetailItems[]>(`${this._url}/imgadd/addCar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, item)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название марки авто
  editMark(id1, mark): Observable<ImgCar> {
    return this.http.put<ImgCar>(`${this._url}/imgedit/editcar/${id1}`, mark)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название модели авто
  editModel(id1, id2, model): Observable<ImgModels> {
    return this.http.put<ImgModels>(`${this._url}/imgedit/editcar/${id1}/${id2}`, model)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название модификации авто
  editModification(id1, id2, id3, modification): Observable<ImgModifications> {
    return this.http.put<ImgModifications>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}`, modification)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название агрегата авто
  editUnit(id1, id2, id3, id4, unit): Observable<ImgUnits> {
    return this.http.put<ImgUnits>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}/${id4}`, unit)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать название раздел
  editDetail(id1, id2, id3, id4, id5, detail): Observable<ImgDetail> {
    return this.http.put<ImgDetail>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}`, detail)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать ссылку на схему раздела
  editDetailItems(id1, id2, id3, id4, id5, id6, item): Observable<ImgItems> {
    return this.http.put<ImgItems>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, item)
      .pipe(catchError(this.errorHandler));
  }

  // Редактировать детали раздела
  editItems(id1, id2, id3, id4, id5, id6, id7, item): Observable<ImgDetailItems> {
    return this.http.put<ImgDetailItems>(`${this._url}/imgedit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`, item)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить марку
  removeMark(id1): Observable<ImgCar> {
    return this.http.delete<ImgCar>(`${this._url}/imgremove/removecar/${id1}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить модель
  removeModel(id1, id2): Observable<ImgModels> {
    return this.http.delete<ImgModels>(`${this._url}/imgremove/removecar/${id1}/${id2}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить модификацию
  removeModification(id1, id2, id3): Observable<ImgModifications> {
    return this.http.delete<ImgModifications>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить агрегат
  removeUnit(id1, id2, id3, id4): Observable<ImgUnits> {
    return this.http.delete<ImgUnits>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}/${id4}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить раздел
  removeDetail(id1, id2, id3, id4, id5): Observable<ImgDetail> {
    return this.http.delete<ImgDetail>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить ссылку на схему раздела
  removeItem(id1, id2, id3, id4, id5, id6): Observable<ImgItems> {
    return this.http.delete<ImgItems>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`)
      .pipe(catchError(this.errorHandler));
  }

  // Удалить данные раздела
  removeItems(id1, id2, id3, id4, id5, id6, id7): Observable<ImgDetailItems> {
    return this.http.delete<ImgDetailItems>(`${this._url}/imgremove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`)
      .pipe(catchError(this.errorHandler));
  }
}

