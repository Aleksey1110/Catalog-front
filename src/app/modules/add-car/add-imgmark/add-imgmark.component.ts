import { Component, OnInit } from '@angular/core';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';
import { Message } from 'src/app/models/message';
import { FlashMessageService } from 'src/app/services/flash-message.service';

@Component({
  selector: 'app-add-imgmark',
  templateUrl: './add-imgmark.component.html',
  styleUrls: ['./add-imgmark.component.css']
})
export class AddImgmarkComponent implements OnInit {

  public markName: String;
  public message: Message;

  constructor(
    private _apiImgCatalogServise: ApiImgCatalogService,
    private _flashMessagesService: FlashMessageService
  ) { }

  ngOnInit() {
  }

  // Создать новый объект машины, передать название марки, отправить на сервер, очистить форму, вывести сообщение об успехе
  addCar() {
    const car = {
      markName: this.markName
    };
    this._apiImgCatalogServise.createCar(car)
      .subscribe(data => {
        this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(msg => {
          this.message = msg;
        });
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        });
    this.markName = '';
  }
}
