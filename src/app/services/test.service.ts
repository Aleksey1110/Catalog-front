import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public markName = [];
  constructor(private _apiServise: ApiService) { }

  test(markName) {
    this._apiServise.getCars()
      .subscribe(data => {
        this.markName = data;
        return markName = this.markName;
      });

  }
}
