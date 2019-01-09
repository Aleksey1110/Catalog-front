import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Items } from 'src/app/models/items';
import { FlashMessageService } from 'src/app/services/flash-message.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-dropdown-navigation',
  templateUrl: './dropdown-navigation.component.html',
  styleUrls: ['./dropdown-navigation.component.css']
})
export class DropdownNavigationComponent implements OnInit {

  constructor(
    private _apiService: ApiService,
    private _flashMessagesService: FlashMessageService
  ) { }

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public items = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  public message: Message;

  // Выходные данные из компонента (Массив составляющих детали)
  @Output() showCar = new EventEmitter<Items[]>();

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }

  // Функция сортировки данных по марке авто
  private _compareMark(detailsA, detailsB) {
    return ('' + detailsA.markName).localeCompare(detailsB.markName);
  }

  // Функция сортировки данных по названию агрегата
  private _compareUnit(detailsA, detailsB) {
    return ('' + detailsA.unitName).localeCompare(detailsB.unitName);
  }

  // Функция сортировки данных по названию детали
  private _compareDetail(detailsA, detailsB) {
    return ('' + detailsA.detailName).localeCompare(detailsB.detailName);
  }

  // Получение списка машин
  public getCars(): void {
    this._apiService.getCars()
      .subscribe(data => {
        this.markName = data.sort(this._compareMark);
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }


  // Получение Id выбранной машины. Получение списка моделей
  public passCarId(event): void {
    this.carId = event.target.value;
    this._apiService.getModelName(this.carId)
      .subscribe(data => {
        this.modelName = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id выбранной модели. Получение списка модификаций
  public passModelId(event): void {
    this.modelId = event.target.value;
    this._apiService.getModificationName(this.carId, this.modelId)
      .subscribe(data => {
        this.modifications = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id выбранной модификации. Получение списка агрегатов
  public passModificationId(event): void {
    this.unitId = event.target.value;
    this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data.sort(this._compareUnit);
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id выбранного агрегата. Получение списка деталей
  public passUnitId(event) {
    this.detailId = event.target.value;
    this._apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
      .subscribe(data => {
        this.details = data.sort(this._compareDetail);
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id детали. Получение списка составляющих детали. Отправка данных их компонента
  public passDetailId(event) {
    this.itemId = event.target.value;
    this._apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
      .subscribe(data => {
        this.items = data;
        this.showCar.emit(this.items);
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }
}
