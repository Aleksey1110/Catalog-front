import { ApiService } from 'src/app/services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { DropdownNavigationComponent } from './dropdown-navigation/dropdown-navigation.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FlashMessageService } from 'src/app/services/flash-message.service';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        DropdownNavigationComponent,
        DetailsPageComponent
    ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        MaterialModule,
        FlexLayoutModule
    ],
    providers: [
        ApiService,
        FlashMessageService
    ]
})

export class HomePageModule { }
