import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditImgitemdetailComponent } from './modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component';
import { EditImgitemComponent } from './modules/add-car/edit-imgitem/edit-imgitem.component';
import { EditImgdetailComponent } from './modules/add-car/edit-imgdetail/edit-imgdetail.component';
import { EditImgunitComponent } from './modules/add-car/edit-imgunit/edit-imgunit.component';
import { EditImgmodificationComponent } from './modules/add-car/edit-imgmodification/edit-imgmodification.component';
import { EditImgmodelComponent } from './modules/add-car/edit-imgmodel/edit-imgmodel.component';
import { EditImgmarkComponent } from './modules/add-car/edit-imgmark/edit-imgmark.component';
import { AddImgitemdetailComponent } from './modules/add-car/add-imgitemdetail/add-imgitemdetail.component';
import { AddImgitemComponent } from './modules/add-car/add-imgitem/add-imgitem.component';
import { AddImgdetailComponent } from './modules/add-car/add-imgdetail/add-imgdetail.component';
import { AddImgunitComponent } from './modules/add-car/add-imgunit/add-imgunit.component';
import { AddImgmodificationComponent } from './modules/add-car/add-imgmodification/add-imgmodification.component';
import { AddImgmodelComponent } from './modules/add-car/add-imgmodel/add-imgmodel.component';
import { AddImgmarkComponent } from './modules/add-car/add-imgmark/add-imgmark.component';
import { EditImgmainComponent } from './modules/add-car/edit-imgmain/edit-imgmain.component';
import { AddImgmainComponent } from './modules/add-car/add-imgmain/add-imgmain.component';
import { CatalogPageComponent } from './modules/picture-catalog/catalog-page/catalog-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { AddModelComponent } from './modules/add-car/add-model/add-model.component';
import { AddModificationComponent } from './modules/add-car/add-modification/add-modification.component';
import { AddUnitComponent } from './modules/add-car/add-unit/add-unit.component';
import { AddDetailComponent } from './modules/add-car/add-detail/add-detail.component';
import { AddDetailItemComponent } from './modules/add-car/add-detail-item/add-detail-item.component';
import { AddAnalogueComponent } from './modules/add-car/add-analogue/add-analogue.component';
import { AddMainComponent } from './modules/add-car/add-main/add-main.component';
import { AddEditingComponent } from './modules/add-car/add-editing/add-editing.component';
import { EditMainComponent } from './modules/add-car/edit-main/edit-main.component';
import { EditDetailAnalogueComponent } from './modules/add-car/edit-detail-analogue/edit-detail-analogue.component';
import { EditDetailItemComponent } from './modules/add-car/edit-detail-item/edit-detail-item.component';
import { EditDetailComponent } from './modules/add-car/edit-detail/edit-detail.component';
import { EditUnitComponent } from './modules/add-car/edit-unit/edit-unit.component';
import { EditModificationComponent } from './modules/add-car/edit-modification/edit-modification.component';
import { EditModelComponent } from './modules/add-car/edit-model/edit-model.component';
import { EditMarkComponent } from './modules/add-car/edit-mark/edit-mark.component';
import { AddCarComponent } from './modules/add-car/add-car/add-car.component';
import { AboutComponent } from './components/about/about.component';

// Роуты дял Add компонентов (Страница Home)
const addRoutes: Routes = [
  {path: 'mark', component: AddCarComponent},
  {path: 'model', component: AddModelComponent},
  {path: 'modification', component: AddModificationComponent},
  {path: 'unit', component: AddUnitComponent},
  {path: 'detail', component: AddDetailComponent},
  {path: 'item', component: AddDetailItemComponent},
  {path: 'analogue', component: AddAnalogueComponent}
];
// Роуты для edit компонентов (Страница Home)
const editRoutes: Routes = [
  {path: 'mark', component: EditMarkComponent},
  {path: 'model', component: EditModelComponent},
  {path: 'modification', component: EditModificationComponent},
  {path: 'unit', component: EditUnitComponent},
  {path: 'detail', component: EditDetailComponent},
  {path: 'item', component: EditDetailItemComponent},
  {path: 'analogue', component: EditDetailAnalogueComponent}
];
// Роуты дял Add компонентов (Страница Catalogs)
const addImgRoutes: Routes = [
  {path: 'mark', component: AddImgmarkComponent},
  {path: 'model', component: AddImgmodelComponent},
  {path: 'modification', component: AddImgmodificationComponent},
  {path: 'unit', component: AddImgunitComponent},
  {path: 'detail', component: AddImgdetailComponent},
  {path: 'item', component: AddImgitemComponent},
  {path: 'itemdetail', component: AddImgitemdetailComponent}
];
// Роуты для edit компонентов (Страница Catalogs)
const editImgRoutes: Routes = [
  {path: 'mark', component: EditImgmarkComponent},
  {path: 'model', component: EditImgmodelComponent},
  {path: 'modification', component: EditImgmodificationComponent},
  {path: 'unit', component: EditImgunitComponent},
  {path: 'detail', component: EditImgdetailComponent},
  {path: 'item', component: EditImgitemComponent},
  {path: 'itemdetail', component: EditImgitemdetailComponent}
];
// Роуты на страницы добавления и редактирования данных
const addEditingRoutes: Routes = [
  {path: 'addmain', component: AddMainComponent, children: addRoutes},
  {path: 'editmain', component: EditMainComponent, children: editRoutes},
  {path: 'addimgmain', component: AddImgmainComponent, children: addImgRoutes},
  {path: 'editimgmain', component: EditImgmainComponent, children: editImgRoutes}
];
// Основные роуты сайта
const routes: Routes = [
  {path: '', component: DetailsPageComponent},
  {path: 'catalog', component: CatalogPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'editing', component: AddEditingComponent, children: addEditingRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
