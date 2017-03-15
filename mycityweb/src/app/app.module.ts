import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityListComponent } from './components/city/city-list.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { CityComponent } from './components/city/city.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
      AppComponent, 
      TopMenuComponent,
      DashboardComponent,
      CityListComponent,
      CityComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
