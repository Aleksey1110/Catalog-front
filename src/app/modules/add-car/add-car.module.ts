import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';
import { AddModelComponent } from './add-model/add-model.component';
import { AddModificationComponent } from './add-modification/add-modification.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { AddDetailItemComponent } from './add-detail-item/add-detail-item.component';
import { AddAnalogueComponent } from './add-analogue/add-analogue.component';
@NgModule({
  declarations: [
    AddCarComponent,
    AddModelComponent,
    AddModificationComponent,
    AddUnitComponent,
    AddDetailComponent,
    AddDetailItemComponent,
    AddAnalogueComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AddCarModule { }
