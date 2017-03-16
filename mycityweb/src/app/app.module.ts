import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityListComponent } from './components/city/city-list.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { CityComponent } from './components/city/city.component';

import { TrailListComponent } from './components/trail/trail-list.component';
import { NewTrailComponent } from './components/trail/new-trail.component';
import { TrailDetailComponent } from './components/trail/trail-detail.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { FooterComponent } from './components/layout/footer.component';
import { HeaderComponent } from './components/layout/header.component';
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
      TrailListComponent,
      TrailDetailComponent,
      NewTrailComponent,
      SignInComponent,
      HeaderComponent,
      FooterComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule,
      //InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule,
      CoreModule
  ],
  providers: [
      CitiesService,
      TrailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
