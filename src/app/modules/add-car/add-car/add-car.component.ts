import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public markName: String;

  constructor(
    private _apiService: ApiService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  // Создать новый объект машины, передать название марки, отправить на сервер, очистить форму, вывести сообщение об успехе
  addCar() {
    const car = {
      markName: this.markName
    };
    this._apiService.createCar(car)
      .subscribe();
    this.markName = '';
    this._flashMessagesService.show('Данные успешно добавлены', { cssClass: 'alert-success', timeout: 4000 });
  }
}
