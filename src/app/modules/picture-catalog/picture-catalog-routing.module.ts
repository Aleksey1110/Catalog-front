import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Основные роуты модуля
const picRoutes: Routes = [
    { path: '', component: CatalogPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(picRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PictureCatalogRoutingModule { }
