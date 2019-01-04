import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-edit-detail-item',
  templateUrl: './edit-detail-item.component.html',
  styleUrls: ['./edit-detail-item.component.css']
})
export class EditDetailItemComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public originalNumber = [];
  public analogues = [];
  public note: String;
  public picture: String;
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  public originalId: String;
  public isConfirmed = false;
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

  // Получение Id детали. Получение списка составляющих детали.
  public passDetailId(event) {
    this.itemId = event.target.value;
    this._apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
      .subscribe(data => {
        this.analogues = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id оригинального номера.
  public passOriginalId(event) {
    this.originalId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект для дынных детали, передать сервису,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editItems() {
    const item = {
      originalNumber: this.originalNumber,
      note: this.note,
      picture: this.picture
    };
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
      this._apiService.editDetailItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, item)
        .subscribe(data => { },
          error => {
            this.errMsg = error;
            this._flashErrorService.showError(this.errMsg);
          });
      this.originalNumber = [];
      this.note = '';
      this.picture = '';
      this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление дынных детали
  public remove() {
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
      this._apiService.removeItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
        .subscribe(data => { },
          error => {
            this.errMsg = error;
            this._flashErrorService.showError(this.errMsg);
          });
      this._flashMessagesService.show('Данные успешно удалены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
