import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core/index';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeModule } from './home/home.module';
import { MapModule } from './map/map.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), HomeModule,MapModule, SharedModule.forRoot()],
  declarations: [AppComponent],
    providers: [{
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    GOOGLE_MAPS_PROVIDERS
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
