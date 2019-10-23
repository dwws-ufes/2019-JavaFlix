import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxModule, AccordionModule } from 'angular-admin-lte';
import { FormsModule } from "@angular/forms";

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';


@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    BoxModule,
    AccordionModule,
    FormsModule,
  ]
})
export class ShowModule { }
