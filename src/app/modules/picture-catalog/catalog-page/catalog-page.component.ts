import { Component, OnInit } from '@angular/core';
import { ImgItems } from 'src/app/models/img-items';
import { ImgDetail } from 'src/app/models/img-detail';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {
  public items = [];
  public details = [];
  public itemImage: String;
  constructor() { }

  ngOnInit() {
  }

  // Получение данных из компонента dropdown. Присвоение значений
  showItems(items: ImgItems[]) {
    this.items = items;
    this.items.forEach(elem => {
      this.details = elem.items;
      this.itemImage = elem.itemImage;
    });
  }

}
