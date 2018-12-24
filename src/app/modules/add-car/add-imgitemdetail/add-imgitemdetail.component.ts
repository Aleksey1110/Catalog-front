import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from './../../../services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-imgitemdetail',
  templateUrl: './add-imgitemdetail.component.html',
  styleUrls: ['./add-imgitemdetail.component.css']
})
export class AddImgitemdetailComponent implements OnInit {

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
  public itemNumber: Number;
  public itemName: String;
  public itemArticle: Array<String>;
  public itemNote: String;

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

  // Получение Id выбранной машины. Получение списка моделей
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

  // Получение Id раздела. Получение основной схемы раздела.
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
  }

  // Создать новый объект для дынных раздела, передать сервису,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public addItems() {
    const items = {
      itemNumber: this.itemNumber,
      itemName: this.itemName,
      itemArticle: this.itemArticle,
      itemNote: this.itemNote
    };
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
      this._apiImgCatalogService.createItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, items)
        .subscribe();
      this.itemName = '';
      this.itemArticle = [];
      this.itemNote = '';
      this._flashMessagesService.show('Данные успешно добавлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

}
