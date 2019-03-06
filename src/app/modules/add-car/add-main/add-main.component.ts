import { NestedTreeControl } from '@angular/cdk/tree';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { ArrayDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-main',
  templateUrl: './add-main.component.html',
  styleUrls: ['./add-main.component.css']
})

export class AddMainComponent implements OnInit {

  treeControl = new NestedTreeControl<Car>(node => node.children);
  fetchedData;
  dataSource = new ArrayDataSource(this.fetchedData);

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.getAllCars().subscribe(data => {
      console.log(data);
      this.fetchedData = data;
    });
  }

  hasChild = (_: number, node: Car) => !!node.children && node.children.length > 0;

}
