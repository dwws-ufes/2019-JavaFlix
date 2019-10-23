import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { adminLteConf } from './admin-lte.conf';   //Import the layout configuration.
import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';
import { HomeComponent } from './home/home.component';       //Box component
import { CoreModule } from './core/core.module';
import { SelectRequiredValidatorDirective } from './directives/select-required-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectRequiredValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule.forRoot(adminLteConf),   //Provide the configuration to the layout module.
    BoxModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
