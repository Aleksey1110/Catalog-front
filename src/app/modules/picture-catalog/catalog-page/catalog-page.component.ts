import { Component, OnInit } from '@angular/core';
import { ImgItems } from 'src/app/models/img-items';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {

  public items = [];
  public details = [];
  public itemImage: String;
  public isPassedId = false;

  constructor() { }

  ngOnInit() {

  }

  // Получение данных из компонента dropdown. Присвоение значений
  showItems(items: ImgItems[]) {
    this.isPassedId = true;
    this.items = items;
    this.items.forEach(elem => {
      this.details = elem.items;
      this.itemImage = elem.itemImage;
    });
  }

}
