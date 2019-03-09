import { FlashMessageService } from './../../../services/flash-message.service';
import { Message } from './../../../models/message';
import { OnInit, Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-add-main',
  templateUrl: './add-main.component.html',
  styleUrls: ['./add-main.component.css']
})

export class AddMainComponent implements OnInit {

  isLoading = false;
  panelFirstLevelState = false;
  panelSecondLevelState = false;
  public markName: String;
  public message: Message;
  cars$: Observable<Car[]>;
  models$: Observable<Models[]>;

  constructor(
    private _apiService: ApiService,
    private _flashMessagesService: FlashMessageService
  ) { }

  ngOnInit() {
    this.cars$ = this._apiService.getCars();
  }

  // Создать новый объект машины, передать название марки, отправить на сервер, очистить форму, вывести сообщение
  addCar() {
    const car = {
      markName: this.markName
    };
    this._apiService.createCar(car)
      .subscribe(data => {
        this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(msg => {
          this.message = msg;
        });
      },
        error => {
          this._flashMessagesService.showMessage(error).subscribe(data => this.message = data);
        });
    this.markName = '';
  }

  passMarkId(id1) {
    this.models$ = this._apiService.getModelName(id1);
    if (!this.models$) {
      this.isLoading = true;
    }
  }

  passModelId(id2) {
    this.panelFirstLevelState = true;
    this.panelSecondLevelState = true;
  }


}
