import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AddCarComponent } from './add-car/add-car.component';
import { AddModelComponent } from './add-model/add-model.component';
import { AddModificationComponent } from './add-modification/add-modification.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { AddDetailItemComponent } from './add-detail-item/add-detail-item.component';
import { AddAnalogueComponent } from './add-analogue/add-analogue.component';
import { AddMainComponent } from './add-main/add-main.component';
import { AddEditingComponent } from './add-editing/add-editing.component';
import { EditMainComponent } from './edit-main/edit-main.component';
import { EditMarkComponent } from './edit-mark/edit-mark.component';
import { EditModelComponent } from './edit-model/edit-model.component';
import { EditModificationComponent } from './edit-modification/edit-modification.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { EditDetailItemComponent } from './edit-detail-item/edit-detail-item.component';
import { EditDetailAnalogueComponent } from './edit-detail-analogue/edit-detail-analogue.component';
import { AddImgmainComponent } from './add-imgmain/add-imgmain.component';
import { AddImgmodelComponent } from './add-imgmodel/add-imgmodel.component';
import { AddImgmarkComponent } from './add-imgmark/add-imgmark.component';
import { AddImgmodificationComponent } from './add-imgmodification/add-imgmodification.component';
import { AddImgunitComponent } from './add-imgunit/add-imgunit.component';
import { AddImgdetailComponent } from './add-imgdetail/add-imgdetail.component';
import { AddImgitemComponent } from './add-imgitem/add-imgitem.component';
import { AddImgitemdetailComponent } from './add-imgitemdetail/add-imgitemdetail.component';
import { EditImgmainComponent } from './edit-imgmain/edit-imgmain.component';
import { EditImgmarkComponent } from './edit-imgmark/edit-imgmark.component';
import { EditImgmodelComponent } from './edit-imgmodel/edit-imgmodel.component';
import { EditImgmodificationComponent } from './edit-imgmodification/edit-imgmodification.component';
import { EditImgunitComponent } from './edit-imgunit/edit-imgunit.component';
import { EditImgdetailComponent } from './edit-imgdetail/edit-imgdetail.component';
import { EditImgitemComponent } from './edit-imgitem/edit-imgitem.component';
import { EditImgitemdetailComponent } from './edit-imgitemdetail/edit-imgitemdetail.component';

@NgModule({
  declarations: [
    AddCarComponent,
    AddModelComponent,
    AddModificationComponent,
    AddUnitComponent,
    AddDetailComponent,
    AddDetailItemComponent,
    AddAnalogueComponent,
    AddMainComponent,
    AddEditingComponent,
    EditMainComponent,
    EditMarkComponent,
    EditModelComponent,
    EditModificationComponent,
    EditUnitComponent,
    EditDetailComponent,
    EditDetailItemComponent,
    EditDetailAnalogueComponent,
    AddImgmainComponent,
    AddImgmodelComponent,
    AddImgmarkComponent,
    AddImgmodificationComponent,
    AddImgunitComponent,
    AddImgdetailComponent,
    AddImgitemComponent,
    AddImgitemdetailComponent,
    EditImgmainComponent,
    EditImgmarkComponent,
    EditImgmodelComponent,
    EditImgmodificationComponent,
    EditImgunitComponent,
    EditImgdetailComponent,
    EditImgitemComponent,
    EditImgitemdetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ]
})
export class AddCarModule { }
