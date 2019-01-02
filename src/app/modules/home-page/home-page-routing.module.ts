import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsPageComponent } from './details-page/details-page.component';

// Основные роуты модуля
const homeRoutes: Routes = [
    { path: '', component: DetailsPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomePageRoutingModule { }
