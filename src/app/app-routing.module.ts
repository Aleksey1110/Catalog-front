import { AboutComponent } from './components/about/about.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { AddPageComponent } from './components/add-page/add-page.component';

// Основные роуты сайта
const routes: Routes = [
  {path: '', component: DetailsPageComponent},
  {path: 'catalog', component: CatalogPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add', component: AddPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
