import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './map.component';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
    ],
    declarations: [MapComponent, GOOGLE_MAPS_DIRECTIVES],
    exports: [MapComponent],
    providers: []
})

export class HomeModule { }
