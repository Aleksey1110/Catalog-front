import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Message } from 'src/app/models/message';
import { FlashMessageService } from 'src/app/services/flash-message.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  public markName = [];
  public carId: String;
  public modelName: String;
  public message: Message;

  constructor(
    private _apiService: ApiService,
    private _flashMessagesService: FlashMessageService
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
      modelsName: this.modelName
    };
    if (this.carId) {
      this._apiService.createModel(this.carId, model)
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
      this.modelName = '';
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }
}
