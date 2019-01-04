import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.css']
})
export class EditModelComponent implements OnInit {

  public markName = [];
  public modelsName = [];
  public carId: String;
  public modelId: String;
  public isConfirmed = false;
  public modelName: String;
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
        this.modelsName = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id выбранной модели.
  public passModelId(event): void {
    this.modelId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект модели, передать название модели,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editModel() {
    const model = {
      modelsName: this.modelName
    };
    if (this.carId && this.modelId) {
      this._apiService.editModel(this.carId, this.modelId, model)
        .subscribe(data => { },
          error => {
            this.errMsg = error;
            this._flashErrorService.showError(this.errMsg);
          });
      this.modelName = '';
      this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление выбранной модели
  public remove() {
    if (this.carId && this.modelId) {
      this._apiService.removeModel(this.carId, this.modelId)
        .subscribe(data => { },
          error => {
            this.errMsg = error;
            this._flashErrorService.showError(this.errMsg);
          });
      this._flashMessagesService.show('Модель успешно удалена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
