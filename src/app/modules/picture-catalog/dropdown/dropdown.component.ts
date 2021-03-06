import { ApiImgCatalogService } from './../../../services/api-img-catalog.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImgItems } from 'src/app/models/img-items';
import { Message } from 'src/app/models/message';
import { FlashMessageService } from 'src/app/services/flash-message.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(
    private apiImageCatalog: ApiImgCatalogService,
    private _flashMessagesService: FlashMessageService
  ) { }

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
  public passedId = false;
  public message: Message;

  // Выходные данные из компонента (Массив данных выбранного раздела)
  @Output() showItems = new EventEmitter<ImgItems[]>();

  ngOnInit() {
    // Получение списка машин при загрузке страницы
    this.getCars();
  }

  // Функция сортировки данных по марке авто
  private _compareMark(detailsA, detailsB) {
    return ('' + detailsA.markName).localeCompare(detailsB.markName);
  }

  // Функция сортировки данных по названию агрегата
  private _compareUnit(detailsA, detailsB) {
    return ('' + detailsA.unitName).localeCompare(detailsB.unitName);
  }

  // Получение списка машин
  public getCars(): void {
    this.apiImageCatalog.getCars()
      .subscribe(data => {
        this.markName = data.sort(this._compareMark);
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id выбранной машины. Получение списка моделей
  public passCarId(event): void {
    this.carId = event.target.value;
    this.apiImageCatalog.getModel(this.carId)
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
    this.apiImageCatalog.getModification(this.carId, this.modelId)
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
    this.apiImageCatalog.getUnit(this.carId, this.modelId, this.unitId)
      .subscribe(data => {
        this.units = data;
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
      );
  }

  // Получение Id агрегата. Получение списка деталей со схемами.
  public passUnitId(event) {
    this.detailId = event.target.value;
    this.apiImageCatalog.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
      .subscribe(data => {
        this.details = data.sort(this._compareUnit);
      }
        ,
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        });
    this.passedId = true;
  }

  // Получение Id схемы. передача данных из компонента.
  public passDetailId(itemId) {
    this.itemId = itemId;
    this.apiImageCatalog.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
      .subscribe(data => {
        this.items = data;
        this.showItems.emit(this.items);
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        }
        );
  }
}
