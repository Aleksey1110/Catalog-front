import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private _apiImgcatalogService: ApiImgCatalogService,
    private _flashMessagesService: FlashMessagesService
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
      });
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
        .subscribe();
      this.markName = '';
      this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите марку автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление выбранной марки
  public remove() {
    if (this.carId) {
      this._apiImgcatalogService.removeMark(this.carId)
        .subscribe();
      this._flashMessagesService.show('Марка успешно удалена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите марку автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}