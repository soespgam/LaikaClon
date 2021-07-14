import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderInfComponent } from '../../slider-inf.component';



@NgModule({
  declarations: [SliderInfComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SliderInfComponent
  ]
})
export class SlideinfModule { }
