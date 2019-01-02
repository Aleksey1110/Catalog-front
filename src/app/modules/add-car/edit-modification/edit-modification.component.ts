import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FlashErrorService } from 'src/app/services/flash-error.service';

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
  public isConfirmed = false;
  public modificationName: String;
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
      this._apiService.editModification(this.carId, this.modelId, this.unitId, modification)
        .subscribe(error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
      this.modificationName = '';
      this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление выбранной модификации
  public remove() {
    if (this.carId && this.modelId && this.unitId) {
      this._apiService.removeModification(this.carId, this.modelId, this.unitId)
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
