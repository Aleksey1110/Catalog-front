import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AddCarRoutingModule, routingComponents } from './add-car-routing.module';
import { FlashMessageService } from 'src/app/services/flash-message.service';

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
    FlashMessageService
  ]
})
export class AddCarModule { }
