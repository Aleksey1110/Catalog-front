import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-add-imgmodification',
  templateUrl: './add-imgmodification.component.html',
  styleUrls: ['./add-imgmodification.component.css']
})
export class AddImgmodificationComponent implements OnInit {

  public markName = [];
  public modelName = [];
  public carId: String;
  public modelId: String;
  public modificationlName: String;
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

  // Получение Id выбранной модели.
  public passModelId(event): void {
    this.modelId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект модификации, передать название модификации,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public addModification() {
    const model = {
      modificationName: this.modificationlName
    };
    if (this.carId && this.modelId) {
      this._apiImgCatalogService.createModification(this.carId, this.modelId, model)
        .subscribe(error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
      this.modificationlName = '';
      this._flashMessagesService.show('Данные успешно добавлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
