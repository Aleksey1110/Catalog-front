import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  constructor() { }

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

}
