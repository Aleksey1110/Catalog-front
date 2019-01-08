import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/login/login/login.component';
import { AuthGuard } from './services/auth.guard';



// Основные роуты сайта
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
