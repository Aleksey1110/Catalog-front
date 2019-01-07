import { Component, OnInit } from '@angular/core';
import { ApiImgCatalogService } from './../../../services/api-img-catalog.service';
import { Message } from 'src/app/models/message';
import { FlashMessageService } from 'src/app/services/flash-message.service';

@Component({
  selector: 'app-add-imgmodel',
  templateUrl: './add-imgmodel.component.html',
  styleUrls: ['./add-imgmodel.component.css']
})
export class AddImgmodelComponent implements OnInit {

  public markName = [];
  public carId: String;
  public modelsName: String;
  public message: Message;

  constructor(
    private _apiImgCatalogServce: ApiImgCatalogService,
    private _flashMessagesService: FlashMessageService
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
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
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
      modelsName: this.modelsName
    };
    if (this.carId) {
      this._apiImgCatalogServce.createModel(this.carId, model)
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
      this.modelsName = '';
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }
}
