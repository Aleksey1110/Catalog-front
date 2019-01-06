import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable, of } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlashMessageService {

  message: Message;
  a;
  constructor() { }

  showMessage(type: string = 'danger', text: string): Observable<any> {
    this.message = { type, text };
    return of(this.message).pipe(timeout(1000));
  }
}
