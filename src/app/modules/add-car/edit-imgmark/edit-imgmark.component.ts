import { FlashMessageService } from 'src/app/services/flash-message.service';
import { Message } from 'src/app/models/message';
import { Component, OnInit } from '@angular/core';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';

@Component({
  selector: 'app-edit-imgmark',
  templateUrl: './edit-imgmark.component.html',
  styleUrls: ['./edit-imgmark.component.css']
})
export class EditImgmarkComponent implements OnInit {

  public marksName = [];
  public markName: String;
  public carId: String;
  public isConfirmed = false;
  public message: Message;

  constructor(
    private _apiImgcatalogService: ApiImgCatalogService,
    private _flashMessagesService: FlashMessageService
  ) { }

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }

  // Получение списка машин
  public getCars(): void {
    this._apiImgcatalogService.getCars()
      .subscribe(data => {
        this.marksName = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id выбранной машины.
  public passCarId(event): void {
    this.carId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект марки, передать новое название марки, отправить на сервер,
  // очистить форму, вывести сообщение об успехе или неудаче
  public editMark() {
    const mark = {
      markName: this.markName
    };
    if (this.carId) {
      this._apiImgcatalogService.editMark(this.carId, mark)
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
      this.markName = '';
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }

  // Удаление выбранной марки
  public remove() {
    if (this.carId) {
      this._apiImgcatalogService.removeMark(this.carId)
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }
}
