import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider-inf',
  templateUrl: './slider-inf.component.html',
  styleUrls: ['./slider-inf.component.scss'],
})
export class SliderInfComponent implements OnInit {
  @ViewChild('slide', { static: true }) slide: IonSlides;
  slideOpts = {
    initialSlide: 1,
    speed: 400,

  };

  constructor() { }

  ngOnInit() { 
    
  }
 
}
