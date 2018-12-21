import { Component, OnInit } from '@angular/core';
import { ImgItems } from 'src/app/models/img-items';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {
  public items = [];
  public itemNumber: Number;
  public itemName: String;
  public itemArticle = [];
  public itemNote: String;
  public itemImage: String;
  constructor() { }

  ngOnInit() {
  }

  // Получение данных из компонента dropdown. Присвоение значений
  showCar(items: ImgItems[]) {
    this.items = items;
    this.items.forEach(elem => {
      this.itemNumber = elem.itemNumber;
      this.itemName = elem.itemName;
      this.itemArticle = elem.itemArticle;
      this.itemNote = elem.itemNote;
      this.itemImage = elem.itemImage;
    });
    console.log(this.items);
  }

}
