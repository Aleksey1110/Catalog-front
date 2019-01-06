import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable, of, merge } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlashMessageService {

  message: Message;

  constructor() { }

  showMessage(text: string, type: string = 'danger', time: number = 10000): Observable<Message> {
    this.message = { type, text };
    const s1 = of(this.message);
    const s2 = of(null).pipe(delay(time));
    return merge(s1, s2);
  }
}
