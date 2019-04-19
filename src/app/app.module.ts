import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShowTimesPageComponent } from './pages/show-times-page/show-times-page.component';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShowTimesPageComponent,
    ComingSoonPageComponent,
    NavbarComponent,
    ErrorPageComponent,
    NotFoundPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
