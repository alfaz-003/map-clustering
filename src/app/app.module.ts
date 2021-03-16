import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsD7s9O_fLwYl5hbqpkYqhQee-vDabySo' 
    }),

    AgmJsMarkerClustererModule
   
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
