import { ApiImgCatalogService } from './../../../services/api-img-catalog.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(private apiImageCatalog: ApiImgCatalogService) { }
  public markName = [];
  public modelName = [];
  public modifications = [];
  public units = [];
  public details = [];
  public items = [];
  public carId: String;
  public modelId: String;
  public unitId: String;
  public detailId: String;
  public itemId: String;
  // // Выходные данные из компонента (Массив составляющих детали)
  // @Output() showCar = new EventEmitter<Items[]>();
  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }

  // Получение списка машин
  public getCars(): void {
    this.apiImageCatalog.getCars()
      .subscribe(data => {
        this.markName = data;
      });
  }

  // // Получение Id выбранной машины. Получение списка моделей
  // public passCarId(event): void {
  //   this.carId = event.target.value;
  //   this.apiService.getModelName(this.carId)
  //     .subscribe(data => {
  //       this.modelName = data;
  //     });
  // }

  // // Получение Id выбранной модели. Получение списка модификаций
  // public passModelId(event): void {
  //   this.modelId = event.target.value;
  //   this.apiService.getModificationName(this.carId, this.modelId)
  //     .subscribe(data => {
  //       this.modifications = data;
  //     });
  // }

  // // Получение Id выбранной модификации. Получение списка агрегатов
  // public passModificationId(event): void {
  //   this.unitId = event.target.value;
  //   this.apiService.getPartsList(this.carId, this.modelId, this.unitId)
  //     .subscribe(data => {
  //       this.units = data;
  //     });
  // }

  // // Получение Id выбранного агрегата. Получение списка деталей
  // public passUnitId(event) {
  //   this.detailId = event.target.value;
  //   this.apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
  //     .subscribe(data => {
  //       this.details = data;
  //     });
  // }

  // // Получение Id детали. Получение списка составляющих детали. Отправка данных их компонента
  // public passDetailId(event) {
  //   this.itemId = event.target.value;
  //   this.apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
  //     .subscribe(data => {
  //       this.items = data;
  //       this.showCar.emit(this.items);
  //     });
  // }
}
