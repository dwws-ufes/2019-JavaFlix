import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderInnerComponent } from './header-inner/header-inner.component';
import { SidebarLeftInnerComponent } from './sidebar-left-inner/sidebar-left-inner.component';

import { BoxModule, TabsModule, DropdownModule } from 'angular-admin-lte';


@NgModule({
  imports: [
    CommonModule,
    BoxModule,
    TabsModule,
    DropdownModule,
  ],
  declarations: [HeaderInnerComponent, SidebarLeftInnerComponent],
  exports: [HeaderInnerComponent, SidebarLeftInnerComponent],
})
export class CoreModule { }
