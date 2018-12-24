import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-imgitem',
  templateUrl: './edit-imgitem.component.html',
  styleUrls: ['./edit-imgitem.component.css']
})
export class EditImgitemComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public analogues = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  public originalId: String;
  public itemImage: String;
  public isConfirmed = false;

  constructor(
    private _apiImgCatalogService: ApiImgCatalogService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }

  // Получение списка машин
  public getCars(): void {
    this._apiImgCatalogService.getCars()
      .subscribe(data => {
        this.markName = data;
      });
  }

  // Получение Id выбранной марки. Получение списка моделей
  public passCarId(event): void {
    this.carId = event.target.value;
    this._apiImgCatalogService.getModel(this.carId)
      .subscribe(data => {
        this.modelName = data;
      });
  }

  // Получение Id выбранной модели. Получение списка модификаций
  public passModelId(event): void {
    this.modelId = event.target.value;
    this._apiImgCatalogService.getModification(this.carId, this.modelId)
      .subscribe(data => {
        this.modifications = data;
      });
  }

  // Получение Id выбранной модификации. Получение списка агрегатов
  public passModificationId(event): void {
    this.unitId = event.target.value;
    this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      });
  }

  // Получение Id выбранного агрегата. Получение списка разделов
  public passUnitId(event) {
    this.detailId = event.target.value;
    this._apiImgCatalogService.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
      .subscribe(data => {
        this.details = data;
      });
  }

  // Получение Id раздела. Получение списка составляющих раздела.
  public passDetailId(event) {
    this.itemId = event.target.value;
    this._apiImgCatalogService.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
      .subscribe(data => {
        this.analogues = data;
      });
  }

  // Получение Id основной схемы раздела.
  public passOriginalId(event) {
    this.originalId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект для основной схемы раздела, передать сервису,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editItems() {
    const item = {
      itemImage: this.itemImage
    };
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
      this._apiImgCatalogService.editDetailItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, item)
        .subscribe();
      this.itemImage = '';
      this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление дынных детали
  public remove() {
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
      this._apiImgCatalogService.removeItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
        .subscribe();
      this._flashMessagesService.show('Данные успешно удалены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
