import { Component, OnInit } from '@angular/core';
import { ApiImgCatalogService } from './../../../services/api-img-catalog.service';
import { Message } from 'src/app/models/message';
import { FlashMessageService } from 'src/app/services/flash-message.service';

@Component({
  selector: 'app-add-imgdetail',
  templateUrl: './add-imgdetail.component.html',
  styleUrls: ['./add-imgdetail.component.css']
})
export class AddImgdetailComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public detailName: String;
  public detailImage: String;
  public message: Message;

  constructor(
    private _apiImgcatalogService: ApiImgCatalogService,
    private _flashMessagesService: FlashMessageService
  ) { }

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }
  // Получение списка машин
  public getCars(): void {
    this._apiImgcatalogService.getCars()
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
    this._apiImgcatalogService.getModel(this.carId)
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
    this._apiImgcatalogService.getModification(this.carId, this.modelId)
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
    this._apiImgcatalogService.getUnit(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id выбранного агрегата.
  public passUnitId(event) {
    this.detailId = event.target.value;
  }

  // Создать новый объект схемы, передать данные,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public addDetail() {
    const detail = {
      detailName: this.detailName,
      detailImage: this.detailImage
    };
    if (this.carId && this.modelId && this.unitId && this.detailId) {
      this._apiImgcatalogService.createDetail(this.carId, this.modelId, this.unitId, this.detailId, detail)
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
      this.detailName = '';
      this.detailImage = '';
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }
}


