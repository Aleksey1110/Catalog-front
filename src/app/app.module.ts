import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { PictureCatalogModule } from './modules/picture-catalog/picture-catalog.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownNavigationComponent } from './components/dropdown-navigation/dropdown-navigation.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { AboutComponent } from './components/about/about.component';
import { AddCarModule } from './modules/add-car/add-car.module';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownNavigationComponent,
    DetailsPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AddCarModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    PictureCatalogModule
  ],
  providers: [
    ApiService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
