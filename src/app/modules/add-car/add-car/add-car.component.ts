import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public markName: String;
  public errMsg;

  constructor(
    private _apiService: ApiService,
    private _flashMessagesService: FlashMessagesService,
    private _flashErrorService: FlashErrorService
  ) { }

  ngOnInit() {
  }

  // Создать новый объект машины, передать название марки, отправить на сервер, очистить форму, вывести сообщение об успехе
  addCar() {
    const car = {
      markName: this.markName
    };
    this._apiService.createCar(car)
      .subscribe(data => { },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
    this.markName = '';
    this._flashMessagesService.show('Данные успешно добавлены', { cssClass: 'alert-success', timeout: 4000 });
  }
}
