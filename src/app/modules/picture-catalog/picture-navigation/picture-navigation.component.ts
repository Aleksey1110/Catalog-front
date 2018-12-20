import { ImgDetail } from './../../../models/img-detail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-navigation',
  templateUrl: './picture-navigation.component.html',
  styleUrls: ['./picture-navigation.component.css']
})
export class PictureNavigationComponent implements OnInit {
  public details = [];
  public detailName: String;
  public detailImage: String;
  public detailItems = [];
  constructor() { }

  ngOnInit() {
  }

  // Получение данных из компонента dropdown-navigation. Присвоение значений
  showCar(details: ImgDetail[]) {
    this.details = details;
    this.details.forEach(elem => {
      this.detailName = elem.detailName;
      this.detailImage = elem.detailImage;
      this.detailItems = elem.detailItems;
    });
    console.log(this.detailName);
  }

}
