import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public originalNumber = [];
  constructor(private _apiServise: ApiService) {
    this._apiServise.getCars().subscribe(data => {
      this.markName = data;
    });

  }

  // test3(id, id2): Observable<any> {
  //   this.test();
  //   this.test1(id);
  //   return this._apiServise.getModificationName(id, id2).pipe(map(data => {
  //     console.log(data);
  //   }));
  // }
}
