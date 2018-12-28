import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-imgmodification',
  templateUrl: './edit-imgmodification.component.html',
  styleUrls: ['./edit-imgmodification.component.css']
})
export class EditImgmodificationComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public isConfirmed = false;
  public modificationName: String;

  constructor(
    private _apiImgCatalogService: ApiImgCatalogService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }

  // Получение списка машин
  public getCars(): void {
    this._apiImgCatalogService.getCars()
      .subscribe(data => {
        this.markName = data;
      });
  }

  // Получение Id выбранной машины. Получение списка моделей
  public passCarId(event): void {
    this.carId = event.target.value;
    this._apiImgCatalogService.getModel(this.carId)
      .subscribe(data => {
        this.modelName = data;
      });
  }

  // Получение Id выбранной модели. Получение списка модификаций
  public passModelId(event): void {
    this.modelId = event.target.value;
    this._apiImgCatalogService.getModification(this.carId, this.modelId)
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
      this._apiImgCatalogService.editModification(this.carId, this.modelId, this.unitId, modification)
        .subscribe();
      this.modificationName = '';
      this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление выбранной модификации
  public remove() {
    if (this.carId && this.modelId && this.unitId) {
      this._apiImgCatalogService.removeModification(this.carId, this.modelId, this.unitId)
        .subscribe();
      this._flashMessagesService.show('Модификация успешно удалена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}