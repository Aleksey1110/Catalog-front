import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-detail-item',
  templateUrl: './add-detail-item.component.html',
  styleUrls: ['./add-detail-item.component.css']
})
export class AddDetailItemComponent implements OnInit {
  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public items = [];
  public originalNumber = [];
  public note: String;
  public picture: String;
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  constructor(
    private apiService: ApiService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }

  // Получение списка машин
  public getCars(): void {
    this.apiService.getCars()
      .subscribe(data => {
        this.markName = data;
      });
  }

  // Получение Id выбранной машины. Получение списка моделей
  public passCarId(event): void {
    this.carId = event.target.value;
    this.apiService.getModelName(this.carId)
      .subscribe(data => {
        this.modelName = data;
      });
  }

  // Получение Id выбранной модели. Получение списка модификаций
  public passModelId(event): void {
    this.modelId = event.target.value;
    this.apiService.getModificationName(this.carId, this.modelId)
      .subscribe(data => {
        this.modifications = data;
      });
  }

  // Получение Id выбранной модификации. Получение списка агрегатов
  public passModificationId(event): void {
    this.unitId = event.target.value;
    this.apiService.getPartsList(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      });
  }

  // Получение Id выбранного агрегата. Получение списка деталей
  public passUnitId(event) {
    this.detailId = event.target.value;
    this.apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
      .subscribe(data => {
        this.details = data;
      });
  }

  // Получение Id детали. Получение списка составляющих детали.
  public passDetailId(event) {
    this.itemId = event.target.value;
    this.apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
      .subscribe();
  }

  // Создать новый объект для дынных детали, передать сервису,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public addItems() {
    const item = {
      originalNumber: this.originalNumber,
      note: this.note,
      picture: this.picture
    };
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId) {
      this.apiService.createDetailItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, item)
        .subscribe();
      this.note = '';
      this.picture = '';
      this._flashMessagesService.show('Данные детали успешно добавлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      // tslint:disable-next-line:max-line-length
      this._flashMessagesService.show('Выберите марку, модель, модификацию, агрегат и название детали автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

}
