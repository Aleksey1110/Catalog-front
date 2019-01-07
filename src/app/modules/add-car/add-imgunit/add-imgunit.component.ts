import { Component, OnInit } from '@angular/core';
import { ApiImgCatalogService } from './../../../services/api-img-catalog.service';
import { Message } from 'src/app/models/message';
import { FlashMessageService } from 'src/app/services/flash-message.service';

@Component({
  selector: 'app-add-imgunit',
  templateUrl: './add-imgunit.component.html',
  styleUrls: ['./add-imgunit.component.css']
})
export class AddImgunitComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public unitName: String;
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
    this._apiImgCatalogService.getModification(this.carId, this.modelId)
      .subscribe(data => {
        this.modifications = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id выбранной модификации.
  public passModificationId(event): void {
    this.unitId = event.target.value;
  }

  // Создать новый объект агрегата, передать название агрегата,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public addUnit() {
    const unit = {
      unitName: this.unitName
    };
    if (this.carId && this.modelId && this.unitId) {
      this._apiImgCatalogService.createUnit(this.carId, this.modelId, this.unitId, unit)
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
      this.unitName = '';
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }
}
