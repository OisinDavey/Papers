import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SelectionComponent } from './selection/selection.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports:[ 
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TopBarComponent },
    ])
  ],
  declarations:[ 
    AppComponent, 
    TopBarComponent, 
    SelectionComponent, 
    PopupComponent,
  ],
  bootstrap:[ 
    AppComponent,
  ]
})
export class AppModule { }
