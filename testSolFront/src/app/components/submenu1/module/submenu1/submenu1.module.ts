import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Submenu1Component } from '../../submenu1.component';
import { MenufloatingModule } from 'src/app/components/menufloating/module/menufloating/menufloating.module';



@NgModule({
  declarations: [Submenu1Component],
  imports: [
    CommonModule,
    MenufloatingModule
  ],
  exports:[
    Submenu1Component
  ]
})
export class Submenu1Module { }
