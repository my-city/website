import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityListComponent } from './components/city/city-list.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { CityComponent } from './components/city/city.component';
import { TrailListComponent } from './components/trail/trail-list.component';
import { AppComponent } from './app.component';
import { CitiesService } from './services/cities.service';
import { TrailsService } from './services/trails.service';

@NgModule({
  declarations: [
      AppComponent, 
      TopMenuComponent,
      DashboardComponent,
      CityListComponent,
      CityComponent,
      TrailListComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule,
      //InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule
  ],
  providers: [
      CitiesService,
      TrailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
