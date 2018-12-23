import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';

@Component({
  selector: 'app-add-imgmark',
  templateUrl: './add-imgmark.component.html',
  styleUrls: ['./add-imgmark.component.css']
})
export class AddImgmarkComponent implements OnInit {
  private markName: String;
  constructor(
    private _apiImgCatalogServise: ApiImgCatalogService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  // Создать новый объект машины, передать название марки, отправить на сервер, очистить форму, вывести сообщение об успехе
  addCar() {
    const car = {
      markName: this.markName
    };
    this._apiImgCatalogServise.createCar(car)
      .subscribe();
    this.markName = '';
    this._flashMessagesService.show('Данные успешно добавлены', { cssClass: 'alert-success', timeout: 4000 });
  }
}
