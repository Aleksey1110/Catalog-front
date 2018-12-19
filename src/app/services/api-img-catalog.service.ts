import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImgCar } from '../models/img-car';

@Injectable({
  providedIn: 'root'
})
export class ApiImgCatalogService {

  constructor(private http: HttpClient) { }

  // Получить список всех марок
  getCars(): Observable<ImgCar[]> {
    return this.http.get<ImgCar[]>('http://localhost:3000/catalogs/piccat');
  }
}
