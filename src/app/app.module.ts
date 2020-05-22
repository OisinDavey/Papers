import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { MathsComponent } from './maths';

@NgModule({
  imports:[ 
    BrowserModule, 
    ReactiveFormsModule,
    appRoutingModule,
  ],
  declarations:[ 
    AppComponent, 
    HomeComponent,
    MathsComponent,
  ],
  bootstrap:[ AppComponent,]
})
export class AppModule { }
