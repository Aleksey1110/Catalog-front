import { FlashMessageService } from 'src/app/services/flash-message.service';
import { Message } from 'src/app/models/message';
import { Component, OnInit } from '@angular/core';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';

@Component({
  selector: 'app-edit-imgitem',
  templateUrl: './edit-imgitem.component.html',
  styleUrls: ['./edit-imgitem.component.css']
})
export class EditImgitemComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public analogues = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  public originalId: String;
  public itemImage: String;
  public isConfirmed = false;
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

  // Получение Id выбранной марки. Получение списка моделей
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

  // Получение Id выбранной модификации. Получение списка агрегатов
  public passModificationId(event): void {
    this.unitId = event.target.value;
    this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id выбранного агрегата. Получение списка разделов
  public passUnitId(event) {
    this.detailId = event.target.value;
    this._apiImgCatalogService.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
      .subscribe(data => {
        this.details = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id раздела. Получение списка составляющих раздела.
  public passDetailId(event) {
    this.itemId = event.target.value;
    this._apiImgCatalogService.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
      .subscribe(data => {
        this.analogues = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id основной схемы раздела.
  public passOriginalId(event) {
    this.originalId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект для основной схемы раздела, передать сервису,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editItems() {
    const item = {
      itemImage: this.itemImage
    };
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
      this._apiImgCatalogService.editDetailItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, item)
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
      this.itemImage = '';
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }

  // Удаление дынных детали
  public remove() {
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
      this._apiImgCatalogService.removeItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
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
