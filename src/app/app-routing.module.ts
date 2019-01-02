import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



// Основные роуты сайта
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './modules/home-page/home-page.module#HomePageModule' },
  { path: 'about', component: AboutComponent },
  { path: 'catalog', loadChildren: './modules/picture-catalog/picture-catalog.module#PictureCatalogModule' },
  { path: 'editing', loadChildren: './modules/add-car/add-car.module#AddCarModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
