import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownNavigationComponent } from './components/dropdown-navigation/dropdown-navigation.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { AboutComponent } from './components/about/about.component';
import { from } from 'rxjs';
import { AddCarModule } from './modules/add-car/add-car.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownNavigationComponent,
    DetailsPageComponent,
    CatalogPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AddCarModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
