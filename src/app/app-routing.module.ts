import { AddCarComponent } from './modules/add-car/add-car/add-car.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

// Роуты Add компонента
const addRoutes: Routes = [
  {path: 'mark', component: AddCarComponent},
  {path: 'model', component: AddModelComponent},
  {path: 'modification', component: AddModificationComponent},
  {path: 'unit', component: AddUnitComponent},
  {path: 'detail', component: AddDetailComponent},
  {path: 'item', component: AddDetailItemComponent},
  {path: 'analogue', component: AddAnalogueComponent}
];
// Роуты на страницы добавления и редактирования данных
const addEditingRoutes: Routes = [
  {path: 'addmain', component: AddMainComponent, children: addRoutes},
  {path: 'editmain', component: EditMainComponent}
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
