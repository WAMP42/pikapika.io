import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { IosBetaFormComponent } from './home-ios-beta-form/index';

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      FormsModule
    ],
    declarations: [HomeComponent, IosBetaFormComponent],
    exports: [HomeComponent],
})

export class HomeModule { }
