import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-edit-imgitemdetail',
  templateUrl: './edit-imgitemdetail.component.html',
  styleUrls: ['./edit-imgitemdetail.component.css']
})
export class EditImgitemdetailComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public analogues = [];
  public ans = [];
  public itemArticle = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  public originalId: String;
  public anId: String;
  public itemNumber: Number;
  public itemName: String;
  public itemNote: String;
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

  // Получение Id выбранного агрегата. Получение списка разделов
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

  // Получение Id раздела. Получение списка составляющих раздела.
  public passDetailId(event) {
    this.itemId = event.target.value;
    this._apiImgCatalogService.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
      .subscribe(data => {
        this.analogues = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id составляющих раздела. Получение списка деталей раздела.
  public passOriginalId(event) {
    this.originalId = event.target.value;
    this._apiImgCatalogService.getDetailItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
      .subscribe(data => {
        this.ans = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );

  }

  // Получение Id детали раздела
  public passAnalogueId(event) {
    this.anId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект для детали раздела, передать сервису,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editAnalogue() {
    const analogue = {
      itemNumber: this.itemNumber,
      itemName: this.itemName,
      itemArticle: this.itemArticle,
      itemNote: this.itemNote,
    };
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
      // tslint:disable-next-line:max-line-length
      this._apiImgCatalogService.editItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId, analogue)
        .subscribe(data => { },
          error => {
            this.errMsg = error;
            this._flashErrorService.showError(this.errMsg);
          });
      this.itemNumber = null;
      this.itemName = '';
      this.itemArticle = [];
      this.itemNote = '';
      this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите все данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление данных раздела
  public remove() {
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
      this._apiImgCatalogService.removeItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId)
        .subscribe(data => { },
          error => {
            this.errMsg = error;
            this._flashErrorService.showError(this.errMsg);
          });
      this._flashMessagesService.show('Данные успешно удалены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}

