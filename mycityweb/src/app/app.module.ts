

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AgmCoreModule } from 'angular2-google-maps/core';

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
import { InstagramFeedComponent } from './components/trail/instagram-feed.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { FooterComponent } from './components/layout/footer.component';
import { HeaderComponent } from './components/layout/header.component';
import { RatingComponent } from './components/rating/rating.component';

import { MapComponent } from './components/trail/map.component';
import { AppComponent } from './app.component';
import { CitiesService } from './services/cities.service';
import { TrailsService } from './services/trails.service';
import { InstagramFeedService } from './services/instagramfeed.service';

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
      InstagramFeedComponent,
      SignInComponent,
      HeaderComponent,
      FooterComponent,
      RatingComponent,
      MapComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule.forRoot(),
      //InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule,
      CoreModule,
      FlexLayoutModule.forRoot(),
      AgmCoreModule.forRoot({
          apiKey: 'YOUR_KEY'
      })
  ],
  providers: [
      CitiesService,
      TrailsService,
      Title,
      InstagramFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
