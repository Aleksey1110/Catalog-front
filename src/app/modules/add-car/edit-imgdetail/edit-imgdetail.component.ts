import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-edit-imgdetail',
  templateUrl: './edit-imgdetail.component.html',
  styleUrls: ['./edit-imgdetail.component.css']
})
export class EditImgdetailComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  public detailName: String;
  public detailImage: String;
  public isConfirmed = false;
  public errMsg;

  constructor(
    private _apiImgCatalogService: ApiImgCatalogService,
    private _flashMessagesService: FlashMessagesService,
    private _flashErrorService: FlashErrorService
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
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
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
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
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
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
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
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id выбранного агрегата. Получение списка схем
  public passUnitId(event) {
    this.detailId = event.target.value;
    this._apiImgCatalogService.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
      .subscribe(data => {
        this.details = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id схемы. Получение списка составляющих схемы.
  public passDetailId(event) {
    this.isConfirmed = true;
    this.itemId = event.target.value;
    this._apiImgCatalogService.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
      .subscribe(error => {
        this.errMsg = error;
        this._flashErrorService.showError(this.errMsg);
      });
  }

  // Создать новый объект для составляющих схемы, передать сервису,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editDetail() {
    const detail = {
      detailName: this.detailName,
      detailImage: this.detailImage
    };
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId) {
      this._apiImgCatalogService.editDetail(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, detail)
        .subscribe(error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
      this.detailName = '';
      this.detailImage = '';
      this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      // tslint:disable-next-line:max-line-length
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление составляющих схемы
  public remove() {
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId) {
      this._apiImgCatalogService.removeDetail(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
        .subscribe(error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
      this._flashMessagesService.show('Деталь успешно удалена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
