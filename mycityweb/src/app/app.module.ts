import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CityListComponent } from './components/city/city-list.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
      AppComponent, 
      CityListComponent,
      TopMenuComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
