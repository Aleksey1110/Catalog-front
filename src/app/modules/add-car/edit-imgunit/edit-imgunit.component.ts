import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-edit-imgunit',
    templateUrl: './edit-imgunit.component.html',
    styleUrls: ['./edit-imgunit.component.css']
})
export class EditImgunitComponent implements OnInit {

    public markName = [];
    public modelName = [];
    public modifications = [];
    public units = [];
    public carId: String;
    public modelId: String;
    public unitId: String;
    public detailId: String;
    public isConfirmed = false;
    public unitName: String;

    constructor(
        private _apiImgCatalogService: ApiImgCatalogService,
        private _flashMessagesService: FlashMessagesService
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
            });
    }

    // Получение Id выбранной машины. Получение списка моделей
    public passCarId(event): void {
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(data => {
                this.modelName = data;
            });
    }

    // Получение Id выбранной модели. Получение списка модификаций
    public passModelId(event): void {
        this.modelId = event.target.value;
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
            .subscribe(data => {
                this.modifications = data;
            });
    }

    // Получение Id выбранной модификации. Получение списка агрегатов
    public passModificationId(event): void {
        this.unitId = event.target.value;
        this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(data => {
                this.units = data;
            });
    }

    // Получение Id выбранного агрегата.
    public passUnitId(event) {
        this.detailId = event.target.value;
        this.isConfirmed = true;
    }

    // Создать новый объект агрегата, передать новое название агрегата,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    public editUnit() {
        const unit = {
            unitName: this.unitName
        };
        if (this.carId && this.modelId && this.unitId && this.detailId) {
            this._apiImgCatalogService.editUnit(this.carId, this.modelId, this.unitId, this.detailId, unit)
                .subscribe();
            this.unitName = '';
            this._flashMessagesService.show('Данные успешно обновлены', { cssClass: 'alert-success', timeout: 4000 });
        } else {
            // tslint:disable-next-line:max-line-length
            this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
        }
    }

    // Удаление выбраннго агрегата
    public remove() {
        if (this.carId && this.modelId && this.unitId && this.detailId) {
            this._apiImgCatalogService.removeUnit(this.carId, this.modelId, this.unitId, this.detailId)
                .subscribe();
            this._flashMessagesService.show('Модификация успешно удалена', { cssClass: 'alert-success', timeout: 4000 });
        } else {
            this._flashMessagesService.show('Выберите данные автомобиля', { cssClass: 'alert-danger', timeout: 4000 });
        }
    }
}