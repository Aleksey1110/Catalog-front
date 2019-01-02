import { ApiService } from 'src/app/services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { DropdownNavigationComponent } from './dropdown-navigation/dropdown-navigation.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@NgModule({
    declarations: [
        DropdownNavigationComponent,
        DetailsPageComponent
    ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        FlashMessagesModule.forRoot()
    ],
    providers: [
        ApiService,
        FlashErrorService
    ]
})

export class HomePageModule { }
