import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AddCarRoutingModule, routingComponents } from './add-car-routing.module';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AddCarRoutingModule
  ],
  providers: [
    FlashErrorService
  ]
})
export class AddCarModule { }
