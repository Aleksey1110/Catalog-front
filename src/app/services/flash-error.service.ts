import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class FlashErrorService {

  constructor(private _flashMsgService: FlashMessagesService) { }

  showError(errMsg) {
    this._flashMsgService.show(errMsg, { cssClass: 'alert-danger', timeout: 10000 });
  }
}
