import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  public items = [];
  public originalNumber = [];
  public analogueNumber = [];
  public note: String;
  public picture: String;
  public isPassedId = false;

  constructor() { }

  ngOnInit() {

  }

  // Получение данных из компонента dropdown-navigation. Присвоение значений
  showCar(items: Items[]) {
    this.isPassedId = true;
    this.items = items;
    this.items.forEach(elem => {
      this.originalNumber = elem.originalNumber;
      this.analogueNumber = elem.analogueNumber;
      this.note = elem.note;
      this.picture = elem.picture;
    });
  }
}
