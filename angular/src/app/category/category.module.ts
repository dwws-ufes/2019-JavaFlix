import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
  ]
})
export class CategoryModule { }
