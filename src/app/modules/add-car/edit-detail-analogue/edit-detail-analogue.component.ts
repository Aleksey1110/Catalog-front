import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-detail-analogue',
  templateUrl: './edit-detail-analogue.component.html',
  styleUrls: ['./edit-detail-analogue.component.css']
})
export class EditDetailAnalogueComponent implements OnInit {
  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public items = [];
  public originalNumber = [];
  public analogues = [];
  public ans = [];
  public note: String;
  public picture: String;
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  public originalId: String;
  public analogueName: String;
  public analogueNum: String;
  public anId: String;
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
      .subscribe(data => {
        this.analogues = data;
      });
  }

  // Получение Id оригинального номера. Получение списка составляющих аналогов.
  public passOriginalId(event) {
    this.originalId = event.target.value;
    this.apiService.getAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
      .subscribe(data => {
        this.ans = data;
      });

  }

  // Получение Id аналога
  public passAnalogueId(event) {
    this.anId = event.target.value;
  }

  // Создать новый объект для аналога, передать сервису,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editAnalogue() {
    const analogue = {
      analogueName: this.analogueName,
      analogueNum: this.analogueNum
    };
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
      this.apiService.editAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId, analogue)
        .subscribe();
      this.analogueName = '';
      this.analogueNum = '';
      this._flashMessagesService.show('Аналог успешно изменен', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      // tslint:disable-next-line:max-line-length
      this._flashMessagesService.show('Выберите все данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

}

