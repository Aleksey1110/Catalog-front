import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-modification',
  templateUrl: './add-modification.component.html',
  styleUrls: ['./add-modification.component.css']
})
export class AddModificationComponent implements OnInit {
  public markName = [];
  public modelName = [];
  public carId: String;
  public modelId: String;
  public modificationlName: String;
  public isConfirmed = false;
  constructor(
    private apiService: ApiService,
    private _flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }
  // Получение списка машин
  public getCars(): void {
    this.apiService.getCars()
      .subscribe(data => {
        this.markName = data;
      });
  }

  // Получение Id выбранной машины. Получение списка моделей
  public passCarId(event): void {
    this.carId = event.target.value;
    this.apiService.getModelName(this.carId)
      .subscribe(data => {
        this.modelName = data;
      });
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
      this.apiService.createModification(this.carId, this.modelId, model)
        .subscribe();
      this.modificationlName = '';
      this._flashMessagesService.show('Модификация успешно добавлена', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      this._flashMessagesService.show('Выберите марку и модель автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
