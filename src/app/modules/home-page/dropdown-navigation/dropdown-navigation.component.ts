import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Items } from 'src/app/models/items';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-dropdown-navigation',
  templateUrl: './dropdown-navigation.component.html',
  styleUrls: ['./dropdown-navigation.component.css']
})
export class DropdownNavigationComponent implements OnInit {

  constructor(
    private _apiService: ApiService,
    private _flashErrorService: FlashErrorService
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
  public errMsg;

  // Выходные данные из компонента (Массив составляющих детали)
  @Output() showCar = new EventEmitter<Items[]>();

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }

  // Получение списка машин
  public getCars(): void {
    this._apiService.getCars()
      .subscribe(data => {
        this.markName = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
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
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
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
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id выбранной модификации. Получение списка агрегатов
  public passModificationId(event): void {
    this.unitId = event.target.value;
    this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id выбранного агрегата. Получение списка деталей
  public passUnitId(event) {
    this.detailId = event.target.value;
    this._apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
      .subscribe(data => {
        this.details = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
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
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }
}
