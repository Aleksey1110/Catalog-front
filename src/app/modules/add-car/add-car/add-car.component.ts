import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlashMessageService } from 'src/app/services/flash-message.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit, OnDestroy {

  public markName: String;
  public errMsg;
  public message: Message;

  constructor(
    private _apiService: ApiService,
    private _flashMessagesService: FlashMessageService
  ) { }

  ngOnInit() {
  }

  // Создать новый объект машины, передать название марки, отправить на сервер, очистить форму, вывести сообщение
  addCar() {
    const car = {
      markName: this.markName
    };
    this._apiService.createCar(car)
      .subscribe(data => {
        this._flashMessagesService.showMessage('success', 'success', 3000).subscribe(msg => {
          this.message = msg;
        });
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        });
    this.markName = '';
  }

  ngOnDestroy(): void {
  }
}
