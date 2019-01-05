import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashErrorService } from 'src/app/services/flash-error.service';
import { FlashMessageService } from 'src/app/services/flash-message.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit, OnDestroy {

  public markName: String;
  public errMsg;
  public a;
  b = false;

  constructor(
    private _apiService: ApiService,
    private _flashMessagesService: FlashMessageService,
    private _flashErrorService: FlashErrorService
  ) { }

  ngOnInit() {
  }

  // Создать новый объект машины, передать название марки, отправить на сервер, очистить форму, вывести сообщение об успехе
  addCar() {
    const car = {
      markName: this.markName
    };
    // this._apiService.createCar(car)
    //   .subscribe(data => { },
    //     error => {
    //       this.errMsg = error;
    //       this._flashErrorService.showError(this.errMsg);
    //     });
    this.markName = '';
    this.a = this._flashMessagesService.showMessage('success', 'success');
    // console.log(this.a);
  }

  ngOnDestroy(): void {
  }
}
