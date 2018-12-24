import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from './../../../services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-imgdetail',
  templateUrl: './add-imgdetail.component.html',
  styleUrls: ['./add-imgdetail.component.css']
})
export class AddImgdetailComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public detailName: String;
  public detailImage: String;
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
        this.markName = data;
      });
  }

  // Получение Id выбранной машины. Получение списка моделей
  public passCarId(event): void {
    this.carId = event.target.value;
    this._apiImgcatalogService.getModel(this.carId)
      .subscribe(data => {
        this.modelName = data;
      });
  }

  // Получение Id выбранной модели. Получение списка модификаций
  public passModelId(event): void {
    this.modelId = event.target.value;
    this._apiImgcatalogService.getModification(this.carId, this.modelId)
      .subscribe(data => {
        this.modifications = data;
      });
  }

  // Получение Id выбранной модификации. Получение списка агрегатов
  public passModificationId(event): void {
    this.unitId = event.target.value;
    this._apiImgcatalogService.getUnit(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      });
  }

  // Получение Id выбранного агрегата.
  public passUnitId(event) {
    this.detailId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект схемы, передать данные,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public addDetail() {
    const detail = {
      detailName: this.detailName,
      detailImage: this.detailImage
    };
    if (this.carId && this.modelId && this.unitId && this.detailId) {
      this._apiImgcatalogService.createDetail(this.carId, this.modelId, this.unitId, this.detailId, detail)
        .subscribe();
      this.detailName = '';
      this.detailImage = '';
      this._flashMessagesService.show('Данные успешно добавлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}


