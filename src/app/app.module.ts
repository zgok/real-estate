import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
