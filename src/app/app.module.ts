import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownNavigationComponent } from './components/dropdown-navigation/dropdown-navigation.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { CatalogPageComponent } from './components/catalog-page/catalog-page.component';
import { AboutComponent } from './components/about/about.component';
import { from } from 'rxjs';
import { AddPageComponent } from './components/add-page/add-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownNavigationComponent,
    DetailsPageComponent,
    CatalogPageComponent,
    AboutComponent,
    AddPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
