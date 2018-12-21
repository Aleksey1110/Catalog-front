import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

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
  public modificationlName: String;
  public isConfirmed = false;
  public modelName: String;
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
        this.modelsName = data;
      });
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
      this.apiService.editModel(this.carId, this.modelId, model)
        .subscribe();
      this.modelName = '';
      this._flashMessagesService.show('Модель успешно изменена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите марку и модель автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление выбранной модели
  public remove() {
    if (this.carId && this.modelId) {
      this.apiService.removeModel(this.carId, this.modelId)
        .subscribe();
      this._flashMessagesService.show('Модель успешно удалена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}