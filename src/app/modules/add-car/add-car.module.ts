import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { TokenInterceptorService } from './../../services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCarRoutingModule, routingComponents } from './add-car-routing.module';
import { FlashMessageService } from 'src/app/services/flash-message.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddCarRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    FlashMessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class AddCarModule { }
