import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginService } from 'src/app/services/login.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    StartPageComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [LoginService]
})
export class CoreModule { }
