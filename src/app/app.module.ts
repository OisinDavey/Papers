import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HigherLevelComponent } from './higher-level';
import { MathsComponent } from './higher-level/maths';
import { AppliedMathsComponent } from './higher-level/applied-maths';
import { PhysicsComponent } from './higher-level/physics';
import { DcgComponent } from './higher-level/dcg';

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
    PhysicsComponent,
    DcgComponent,
    HigherLevelComponent,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:[ 
    AppComponent,
  ]
})
export class AppModule { }
