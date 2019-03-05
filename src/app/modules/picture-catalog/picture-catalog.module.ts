import { ApiImgCatalogService } from './../../services/api-img-catalog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown/dropdown.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { PictureCatalogRoutingModule } from './picture-catalog-routing.module';
import { FlashMessageService } from 'src/app/services/flash-message.service';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DropdownComponent,
    CatalogPageComponent
  ],
  imports: [
    CommonModule,
    PictureCatalogRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    ApiImgCatalogService,
    FlashMessageService
  ]
})
export class PictureCatalogModule { }
