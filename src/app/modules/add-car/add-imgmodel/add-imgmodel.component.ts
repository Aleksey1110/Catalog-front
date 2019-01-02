import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from './../../../services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-add-imgmodel',
  templateUrl: './add-imgmodel.component.html',
  styleUrls: ['./add-imgmodel.component.css']
})
export class AddImgmodelComponent implements OnInit {

  public markName = [];
  public carId: String;
  public isConfirmed = false;
  public modelsName: String;
  public errMsg;

  constructor(
    private _apiImgCatalogServce: ApiImgCatalogService,
    private _flashMessagesService: FlashMessagesService,
    private _flashErrorService: FlashErrorService
  ) { }

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }

  // Получение списка машин
  public getCars(): void {
    this._apiImgCatalogServce.getCars()
      .subscribe(data => {
        this.markName = data;
      },
        error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        }
      );
  }

  // Получение Id выбранной машины.
  public passCarId(event): void {
    this.carId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект модели, передать название модели, отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public addModel() {
    const model = {
      modelsName: this.modelsName
    };
    if (this.carId) {
      this._apiImgCatalogServce.createModel(this.carId, model)
        .subscribe(error => {
          this.errMsg = error;
          this._flashErrorService.showError(this.errMsg);
        });
      this.modelsName = '';
      this._flashMessagesService.show('Данные успешно добавлены', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
