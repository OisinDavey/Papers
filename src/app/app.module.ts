import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HigherLevelComponent } from './higher-level';
import { OrdinaryLevelComponent } from './ordinary-level';

import { HLHomeComponent } from './higher-level/home';
import { HLMathsComponent } from './higher-level/maths';
import { HLAppliedMathsComponent } from './higher-level/applied-maths';
import { HLPhysicsComponent } from './higher-level/physics';
import { HLDcgComponent } from './higher-level/dcg';
import { HLIrishComponent } from './higher-level/irish';
import { HLEnglishComponent} from './higher-level/english';
import { HLFrenchComponent } from './higher-level/french';

import { OLHomeComponent } from './ordinary-level/home';
import { OLEnglishComponent } from './ordinary-level/english';
import { OLIrishComponent } from './ordinary-level/irish';
import { OLMathsComponent } from './ordinary-level/maths';
import { OLFrenchComponent } from './ordinary-level/french';

@NgModule({
  imports:[ 
    BrowserModule, 
    ReactiveFormsModule,
    appRoutingModule,
  ],
  declarations:[ 
    AppComponent, 
    HomeComponent,
    HigherLevelComponent,
    OrdinaryLevelComponent,

    HLHomeComponent,
    HLMathsComponent,
    HLAppliedMathsComponent,
    HLPhysicsComponent,
    HLDcgComponent,
    HLIrishComponent,
    HLEnglishComponent,
    HLFrenchComponent,

    OLHomeComponent,
    OLEnglishComponent,
    OLIrishComponent,
    OLMathsComponent,
    OLFrenchComponent,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:[ 
    AppComponent,
  ]
})
export class AppModule { }
