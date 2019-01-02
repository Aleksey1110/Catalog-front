import { ApiImgCatalogService } from './../../services/api-img-catalog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown/dropdown.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { PictureCatalogRoutingModule } from './picture-catalog-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashErrorService } from 'src/app/services/flash-error.service';

@NgModule({
  declarations: [
    DropdownComponent,
    CatalogPageComponent
  ],
  imports: [
    CommonModule,
    PictureCatalogRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ApiImgCatalogService,
    FlashErrorService
  ]
})
export class PictureCatalogModule { }
