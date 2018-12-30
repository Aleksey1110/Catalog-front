import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';



// Основные роуты сайта
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'catalog', loadChildren: './modules/picture-catalog/picture-catalog.module#PictureCatalogModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
