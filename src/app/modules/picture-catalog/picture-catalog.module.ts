import { ApiImgCatalogService } from './../../services/api-img-catalog.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown/dropdown.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { PictureCatalogRoutingModule } from './picture-catalog-routing.module';

@NgModule({
  declarations: [
    DropdownComponent,
    CatalogPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PictureCatalogRoutingModule
  ],
  providers: [ApiImgCatalogService]
})
export class PictureCatalogModule { }
