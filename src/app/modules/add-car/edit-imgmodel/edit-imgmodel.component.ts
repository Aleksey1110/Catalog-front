import { FlashMessageService } from 'src/app/services/flash-message.service';
import { Message } from 'src/app/models/message';
import { Component, OnInit } from '@angular/core';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';

@Component({
  selector: 'app-edit-imgmodel',
  templateUrl: './edit-imgmodel.component.html',
  styleUrls: ['./edit-imgmodel.component.css']
})
export class EditImgmodelComponent implements OnInit {

  public markName = [];
  public modelsName = [];
  public carId: String;
  public modelId: String;
  public isConfirmed = false;
  public modelName: String;
  public message: Message;

  constructor(
    private _apiImgCatalogService: ApiImgCatalogService,
    private _flashMessagesService: FlashMessageService
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
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id выбранной машины. Получение списка моделей
  public passCarId(event): void {
    this.carId = event.target.value;
    this._apiImgCatalogService.getModel(this.carId)
      .subscribe(data => {
        this.modelsName = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
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
      this._apiImgCatalogService.editModel(this.carId, this.modelId, model)
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
      this.modelName = '';
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }

  // Удаление выбранной модели
  public remove() {
    if (this.carId && this.modelId) {
      this._apiImgCatalogService.removeModel(this.carId, this.modelId)
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }
}
