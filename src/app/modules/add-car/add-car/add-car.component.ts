import { Car } from './../../../models/car';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  markName: String;
  constructor(
    private apiService: ApiService
  ) {  }

  ngOnInit() {
  }

  addCar() {
    const car = {
      markName: this.markName
    };
    this.apiService.createCar(car)
      .subscribe(data => console.log(data));
  }
}
