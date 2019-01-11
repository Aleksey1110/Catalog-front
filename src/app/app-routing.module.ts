import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { AboutComponent } from './modules/core/about/about.component';
import { PageNotFoundComponent } from './modules/core/page-not-found/page-not-found.component';
import { StartPageComponent } from './modules/core/start-page/start-page.component';



// Основные роуты сайта
const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: './modules/home-page/home-page.module#HomePageModule' },
  { path: 'catalog', loadChildren: './modules/picture-catalog/picture-catalog.module#PictureCatalogModule' },
  { path: 'editing', canLoad: [AuthGuard], loadChildren: './modules/add-car/add-car.module#AddCarModule' },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
