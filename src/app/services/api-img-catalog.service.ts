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

  // Получить список всех марок
  getCars(): Observable<ImgCar[]> {
    return this.http.get<ImgCar[]>('http://localhost:3000/catalogs/piccat');
  }

  // Получить список всех моделей
  getModel(id1): Observable<ImgModels[]> {
    return this.http.get<ImgModels[]>(`http://localhost:3000/catalogs/piccat/${id1}`);
  }

  // Получить список всех модификаций
  getModification(id1, id2): Observable<ImgModifications[]> {
    return this.http.get<ImgModifications[]>(`http://localhost:3000/catalogs/piccat/${id1}/${id2}`);
  }

  // Получить список всех агрегатов
  getUnit(id1, id2, id3): Observable<ImgUnits[]> {
    return this.http.get<ImgUnits[]>(`http://localhost:3000/catalogs/piccat/${id1}/${id2}/${id3}`);
  }

  // Получить список всех разделов
  getDetail(id1, id2, id3, id4): Observable<ImgDetail[]> {
    return this.http.get<ImgDetail[]>(`http://localhost:3000/catalogs/piccat/${id1}/${id2}/${id3}/${id4}`);
  }

  // Получить список деталей выбранного раздела
  getItems(id1, id2, id3, id4, id5): Observable<ImgItems[]> {
    return this.http.get<ImgItems[]>(`http://localhost:3000/catalogs/piccat/${id1}/${id2}/${id3}/${id4}/${id5}`);
  }
}
