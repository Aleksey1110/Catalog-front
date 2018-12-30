import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCarComponent } from './add-car/add-car.component';
import { AddModelComponent } from './add-model/add-model.component';
import { AddModificationComponent } from './add-modification/add-modification.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { AddDetailItemComponent } from './add-detail-item/add-detail-item.component';
import { AddAnalogueComponent } from './add-analogue/add-analogue.component';
import { EditMarkComponent } from './edit-mark/edit-mark.component';
import { EditModelComponent } from './edit-model/edit-model.component';
import { EditModificationComponent } from './edit-modification/edit-modification.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { EditDetailItemComponent } from './edit-detail-item/edit-detail-item.component';
import { EditDetailAnalogueComponent } from './edit-detail-analogue/edit-detail-analogue.component';
import { AddImgmarkComponent } from './add-imgmark/add-imgmark.component';
import { AddImgmodelComponent } from './add-imgmodel/add-imgmodel.component';
import { AddImgmodificationComponent } from './add-imgmodification/add-imgmodification.component';
import { AddImgunitComponent } from './add-imgunit/add-imgunit.component';
import { AddImgdetailComponent } from './add-imgdetail/add-imgdetail.component';
import { AddImgitemComponent } from './add-imgitem/add-imgitem.component';
import { AddImgitemdetailComponent } from './add-imgitemdetail/add-imgitemdetail.component';
import { EditImgmarkComponent } from './edit-imgmark/edit-imgmark.component';
import { EditImgmodelComponent } from './edit-imgmodel/edit-imgmodel.component';
import { EditImgmodificationComponent } from './edit-imgmodification/edit-imgmodification.component';
import { EditImgunitComponent } from './edit-imgunit/edit-imgunit.component';
import { EditImgdetailComponent } from './edit-imgdetail/edit-imgdetail.component';
import { EditImgitemComponent } from './edit-imgitem/edit-imgitem.component';
import { EditImgitemdetailComponent } from './edit-imgitemdetail/edit-imgitemdetail.component';
import { AddMainComponent } from './add-main/add-main.component';
import { EditMainComponent } from './edit-main/edit-main.component';
import { AddImgmainComponent } from './add-imgmain/add-imgmain.component';
import { EditImgmainComponent } from './edit-imgmain/edit-imgmain.component';
import { AddEditingComponent } from './add-editing/add-editing.component';

// Роуты дял Add компонентов (Страница Home)
const addRoutes: Routes = [
    { path: 'mark', component: AddCarComponent },
    { path: 'model', component: AddModelComponent },
    { path: 'modification', component: AddModificationComponent },
    { path: 'unit', component: AddUnitComponent },
    { path: 'detail', component: AddDetailComponent },
    { path: 'item', component: AddDetailItemComponent },
    { path: 'analogue', component: AddAnalogueComponent }
];

// Роуты для edit компонентов (Страница Home)
const editRoutes: Routes = [
    { path: 'mark', component: EditMarkComponent },
    { path: 'model', component: EditModelComponent },
    { path: 'modification', component: EditModificationComponent },
    { path: 'unit', component: EditUnitComponent },
    { path: 'detail', component: EditDetailComponent },
    { path: 'item', component: EditDetailItemComponent },
    { path: 'analogue', component: EditDetailAnalogueComponent }
];

// Роуты дял Add компонентов (Страница Catalogs)
const addImgRoutes: Routes = [
    { path: 'mark', component: AddImgmarkComponent },
    { path: 'model', component: AddImgmodelComponent },
    { path: 'modification', component: AddImgmodificationComponent },
    { path: 'unit', component: AddImgunitComponent },
    { path: 'detail', component: AddImgdetailComponent },
    { path: 'item', component: AddImgitemComponent },
    { path: 'itemdetail', component: AddImgitemdetailComponent }
];

// Роуты для edit компонентов (Страница Catalogs)
const editImgRoutes: Routes = [
    { path: 'mark', component: EditImgmarkComponent },
    { path: 'model', component: EditImgmodelComponent },
    { path: 'modification', component: EditImgmodificationComponent },
    { path: 'unit', component: EditImgunitComponent },
    { path: 'detail', component: EditImgdetailComponent },
    { path: 'item', component: EditImgitemComponent },
    { path: 'itemdetail', component: EditImgitemdetailComponent }
];

// Роуты на страницы добавления и редактирования данных
const addEditingRoutes: Routes = [
    { path: 'addmain', component: AddMainComponent, children: addRoutes },
    { path: 'editmain', component: EditMainComponent, children: editRoutes },
    { path: 'addimgmain', component: AddImgmainComponent, children: addImgRoutes },
    { path: 'editimgmain', component: EditImgmainComponent, children: editImgRoutes }
];

// Основные роуты модуля
const addEditRoutes: Routes = [
    { path: 'editing', component: AddEditingComponent, children: addEditingRoutes }
];

@NgModule({
    imports: [
        RouterModule.forChild(addEditRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AddCarRoutingModule { }
