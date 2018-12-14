import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {
  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public detailName: String;
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

  // Получение Id выбранной модели. Получение списка модификаций
  public passModelId(event): void {
    this.modelId = event.target.value;
    this.apiService.getModificationName(this.carId, this.modelId)
      .subscribe(data => {
        this.modifications = data;
      });
  }

  // Получение Id выбранной модификации. Получение списка агрегатов
  public passModificationId(event): void {
    this.unitId = event.target.value;
    this.apiService.getPartsList(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      });
  }

  // Получение Id выбранного агрегата.
  public passUnitId(event) {
    this.detailId = event.target.value;
    this.isConfirmed = true;
  }

  // Создать новый объект детали, передать название детали,
  //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
  public addDetail() {
    const detail = {
      detailName: this.detailName
    };
    if (this.carId && this.modelId && this.unitId && this.detailId) {
      this.apiService.createDetail(this.carId, this.modelId, this.unitId, this.detailId, detail)
        .subscribe();
      this.detailName = '';
      this._flashMessagesService.show('Деталь успешно добавлен', { cssClass: 'alert-success', timeout: 4000 });
    } else {
      // tslint:disable-next-line:max-line-length
      this._flashMessagesService.show('Выберите марку, модель, модификацию и агрегат автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
    }
  }
}
