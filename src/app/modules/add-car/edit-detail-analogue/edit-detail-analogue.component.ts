import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';
import { Message } from 'src/app/models/message';
import { FlashMessageService } from 'src/app/services/flash-message.service';

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

  // Получение Id выбранной машины. Получение списка моделей
  public passCarId(event): void {
    this.carId = event.target.value;
    this._apiService.getModelName(this.carId)
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
    this._apiService.getModificationName(this.carId, this.modelId)
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
    this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
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
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
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
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
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
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
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
        .subscribe(data => {
          this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(msg => {
            this.message = msg;
          });
        },
          error => {
            this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
          });
      this.analogueName = '';
      this.analogueNum = '';
    } else {
      this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
    }
  }

  // Удаление аналога
  public remove() {
    if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
      this._apiService.removeAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId)
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

