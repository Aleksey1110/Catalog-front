import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  public markName = [];
  public carId: String;
  public modelName: String;
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

  // Получение Id выбранной машины.
  public passCarId(event): void {
    this.carId = event.target.value;
  }

  // Создать новый объект модели, передать название модели, отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public addModel() {
    const model = {
      modelsName: this.modelName
    };
    if (this.carId) {
      this._apiService.createModel(this.carId, model)
        .subscribe(data => { },
          error => {
            this.errMsg = error;
            this._flashErrorService.showError(this.errMsg);
          });
      this.modelName = '';
      this._flashMessagesService.show('Модель успешно добавлена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите марку автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
