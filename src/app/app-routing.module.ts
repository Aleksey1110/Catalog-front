import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



// Основные роуты сайта
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'catalog', loadChildren: './modules/picture-catalog/picture-catalog.module#PictureCatalogModule' },
  { path: 'editing', loadChildren: './modules/add-car/add-car.module#AddCarModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
