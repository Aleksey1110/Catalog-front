import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashMessageService {

  message: Message;
  a;
  constructor() { }

  showMessage(type: string = 'danger', text: string) {
    this.message = { text, type };
    window.setTimeout(() => {
      this.message = { text: '', type: '' };
    }, 2000);

    return this.message;
    console.log(this.message);
  }
}
