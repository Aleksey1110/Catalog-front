import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})
export class EditUnitComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public isConfirmed = false;
  public unitName: String;
  public errMsg;

  constructor(
    private _apiService: ApiService,
    private _flashMessagesService: FlashMessagesService,
    private _flashErrorService: FlashErrorService
  ) { }

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
      }
        ,
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
  }

  // Получение Id выбранного агрегата.
  public passUnitId(event) {
    this.detailId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект агрегата, передать новое название агрегата,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editUnit() {
    const unit = {
      unitName: this.unitName
    };
    if (this.carId && this.modelId && this.unitId && this.detailId) {
      this._apiService.editUnit(this.carId, this.modelId, this.unitId, this.detailId, unit)
        .subscribe(error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
      this.unitName = '';
      this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление выбраннго агрегата
  public remove() {
    if (this.carId && this.modelId && this.unitId && this.detailId) {
      this._apiService.removeUnit(this.carId, this.modelId, this.unitId, this.detailId)
        .subscribe(error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
      this._flashMessagesService.show('Модификация успешно удалена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
