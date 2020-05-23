import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { MathsComponent } from './maths';
import { AppliedMathsComponent } from './applied-maths';

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
    AppliedMathsComponent,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:[ 
    AppComponent,
  ]
})
export class AppModule { }
