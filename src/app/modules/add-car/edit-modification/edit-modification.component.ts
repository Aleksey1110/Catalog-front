import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-modification',
  templateUrl: './edit-modification.component.html',
  styleUrls: ['./edit-modification.component.css']
})
export class EditModificationComponent implements OnInit {
  public markName = [];
  public modelName = [];
  public modifications = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public unitName: String;
  public isConfirmed = false;
  public modificationName: String;
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

  // Получение Id выбранной модификации.
  public passModificationId(event): void {
    this.unitId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект модификации, передать новое название модификации,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editModification() {
    const modification = {
      modificationName: this.modificationName
    };
    if (this.carId && this.modelId && this.unitId) {
      this.apiService.editModification(this.carId, this.modelId, this.unitId, modification)
        .subscribe();
      this.modificationName = '';
      this._flashMessagesService.show('Модификация успешно изменена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите марку, модель и модификацию автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
