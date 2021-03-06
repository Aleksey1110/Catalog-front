import { FlashMessageService } from 'src/app/services/flash-message.service';
import { Message } from 'src/app/models/message';
import { Component, OnInit } from '@angular/core';
import { ApiImgCatalogService } from 'src/app/services/api-img-catalog.service';

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
    public message: Message;

    constructor(
        private _apiImgCatalogService: ApiImgCatalogService,
        private _flashMessagesService: FlashMessageService
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
            },
                error => {
                    this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
                }
            );
    }

    // Получение Id выбранной машины. Получение списка моделей
    public passCarId(event): void {
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
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
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
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
        this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(data => {
                this.units = data;
            },
                error => {
                    this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
                }
            );
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
                .subscribe(data => {
                    this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(msg => {
                        this.message = msg;
                    });
                },
                    error => {
                        this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
                    });
            this.unitName = '';
        } else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(data => this.message = data);
        }
    }

    // Удаление выбраннго агрегата
    public remove() {
        if (this.carId && this.modelId && this.unitId && this.detailId) {
            this._apiImgCatalogService.removeUnit(this.carId, this.modelId, this.unitId, this.detailId)
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
