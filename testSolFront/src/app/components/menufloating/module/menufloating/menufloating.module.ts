import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenufloatingComponent } from '../../menufloating.component';



@NgModule({
  declarations: [ MenufloatingComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MenufloatingComponent
  ]
})
export class MenufloatingModule { }
