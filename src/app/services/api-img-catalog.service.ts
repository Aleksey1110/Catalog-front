import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<ImgCar[]>(`catalogs/piccat`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить список всех моделей
  getModel(id1): Observable<ImgModels[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<ImgModels[]>(`catalogs/piccat/${id1}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить список всех модификаций
  getModification(id1, id2): Observable<ImgModifications[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<ImgModifications[]>(`catalogs/piccat/${id1}/${id2}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить список всех агрегатов
  getUnit(id1, id2, id3): Observable<ImgUnits[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<ImgUnits[]>(`catalogs/piccat/${id1}/${id2}/${id3}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить список всех разделов
  getDetail(id1, id2, id3, id4): Observable<ImgDetail[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<ImgDetail[]>(`catalogs/piccat/${id1}/${id2}/${id3}/${id4}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить схему выбранного раздела
  getItems(id1, id2, id3, id4, id5): Observable<ImgItems[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<ImgItems[]>(`catalogs/piccat/${id1}/${id2}/${id3}/${id4}/${id5}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Получить детали выбранного раздела
  getDetailItems(id1, id2, id3, id4, id5, id6): Observable<ImgDetailItems[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<ImgDetailItems[]>(`catalogs/piccat/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, { headers: headers })
      .pipe(catchError(this.errorHandler));
  }

  // Создать новую марку авто
  createCar(car): Observable<ImgCar[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ImgCar[]>(`imgadd/addCar`, car, { headers: headers });
  }

  // Создать новую модель
  createModel(id1, model): Observable<ImgModels[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ImgModels[]>(`imgadd/addCar/${id1}`, model, { headers: headers });
  }

  // Создать новую модификацию
  createModification(id1, id2, modification): Observable<ImgModifications[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ImgModifications[]>(`imgadd/addCar/${id1}/${id2}`, modification, { headers: headers });
  }

  // Создать новую агрегат
  createUnit(id1, id2, id3, unit): Observable<ImgUnits[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ImgUnits[]>(`imgadd/addCar/${id1}/${id2}/${id3}`, unit, { headers: headers });
  }

  // Создать новую схему
  createDetail(id1, id2, id3, id4, detail): Observable<ImgDetail[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ImgDetail[]>(`imgadd/addCar/${id1}/${id2}/${id3}/${id4}`, detail, { headers: headers });
  }

  // Создать новую основную схему
  createDetailItem(id1, id2, id3, id4, id5, item): Observable<ImgItems[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ImgItems[]>(`imgadd/addCar/${id1}/${id2}/${id3}/${id4}/${id5}`, item, { headers: headers });
  }

  // Создать новые детали
  createItems(id1, id2, id3, id4, id5, id6, item): Observable<ImgDetailItems[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ImgDetailItems[]>(`imgadd/addCar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`,
      item, { headers: headers });
  }

  // Редактировать название марки авто
  editMark(id1, mark): Observable<ImgCar> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<ImgCar>(`imgedit/editcar/${id1}`, mark, { headers: headers });
  }

  // Редактировать название модели авто
  editModel(id1, id2, model): Observable<ImgModels> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<ImgModels>(`imgedit/editcar/${id1}/${id2}`, model, { headers: headers });
  }

  // Редактировать название модификации авто
  editModification(id1, id2, id3, modification): Observable<ImgModifications> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<ImgModifications>(`imgedit/editcar/${id1}/${id2}/${id3}`, modification, { headers: headers });
  }

  // Редактировать название агрегата авто
  editUnit(id1, id2, id3, id4, unit): Observable<ImgUnits> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<ImgUnits>(`imgedit/editcar/${id1}/${id2}/${id3}/${id4}`, unit, { headers: headers });
  }

  // Редактировать название раздел
  editDetail(id1, id2, id3, id4, id5, detail): Observable<ImgDetail> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<ImgDetail>(`imgedit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}`, detail, { headers: headers });
  }

  // Редактировать ссылку на схему раздела
  editDetailItems(id1, id2, id3, id4, id5, id6, item): Observable<ImgItems> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<ImgItems>(`imgedit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, item, { headers: headers });
  }

  // Редактировать детали раздела
  editItems(id1, id2, id3, id4, id5, id6, id7, item): Observable<ImgDetailItems> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<ImgDetailItems>(`imgedit/editcar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`,
      item, { headers: headers });
  }

  // Удалить марку
  removeMark(id1): Observable<ImgCar> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<ImgCar>(`imgremove/removecar/${id1}`, { headers: headers });
  }

  // Удалить модель
  removeModel(id1, id2): Observable<ImgModels> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<ImgModels>(`imgremove/removecar/${id1}/${id2}`, { headers: headers });
  }

  // Удалить модификацию
  removeModification(id1, id2, id3): Observable<ImgModifications> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<ImgModifications>(`imgremove/removecar/${id1}/${id2}/${id3}`, { headers: headers });
  }

  // Удалить агрегат
  removeUnit(id1, id2, id3, id4): Observable<ImgUnits> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<ImgUnits>(`imgremove/removecar/${id1}/${id2}/${id3}/${id4}`, { headers: headers });
  }

  // Удалить раздел
  removeDetail(id1, id2, id3, id4, id5): Observable<ImgDetail> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<ImgDetail>(`imgremove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}`, { headers: headers });
  }

  // Удалить ссылку на схему раздела
  removeItem(id1, id2, id3, id4, id5, id6): Observable<ImgItems> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<ImgItems>(`imgremove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}`, { headers: headers });
  }

  // Удалить данные раздела
  removeItems(id1, id2, id3, id4, id5, id6, id7): Observable<ImgDetailItems> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<ImgDetailItems>(`imgremove/removecar/${id1}/${id2}/${id3}/${id4}/${id5}/${id6}/${id7}`,
      { headers: headers });
  }
}

