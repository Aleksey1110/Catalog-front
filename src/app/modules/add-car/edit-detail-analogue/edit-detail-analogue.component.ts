import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-edit-detail-analogue',
  templateUrl: './edit-detail-analogue.component.html',
  styleUrls: ['./edit-detail-analogue.component.css']
})
export class EditDetailAnalogueComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public analogues = [];
  public ans = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  public originalId: String;
  public analogueName: String;
  public analogueNum: String;
  public anId: String;
  public isConfirmed = false;
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

  // Получение Id выбранной модификации. Получение списка агрегатов
  public passModificationId(event): void {
    this.unitId = event.target.value;
    this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id выбранного агрегата. Получение списка деталей
  public passUnitId(event) {
    this.detailId = event.target.value;
    this._apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
      .subscribe(data => {
        this.details = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id детали. Получение списка составляющих детали.
  public passDetailId(event) {
    this.itemId = event.target.value;
    this._apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
      .subscribe(data => {
        this.analogues = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id оригинального номера. Получение списка составляющих аналогов.
  public passOriginalId(event) {
    this.originalId = event.target.value;
    this._apiService.getAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
      .subscribe(data => {
        this.ans = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );

  }

  // Получение Id аналога
  public passAnalogueId(event) {
    this.anId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект для аналога, передать сервису,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public editAnalogue() {
    const analogue = {
      analogueName: this.analogueName,
      analogueNum: this.analogueNum
    };
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
      this._apiService.editAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId, analogue)
        .subscribe(error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
      this.analogueName = '';
      this.analogueNum = '';
      this._flashMessagesService.show('Аналог успешно изменен', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

  // Удаление аналога
  public remove() {
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
      this._apiService.removeAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId)
        .subscribe(error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
      this._flashMessagesService.show('Аналог успешно удален', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}

