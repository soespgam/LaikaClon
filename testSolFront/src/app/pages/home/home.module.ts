import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderModule } from 'src/app/components/header/module/header.module';
import { Submenu1Module } from 'src/app/components/submenu1/module/submenu1/submenu1.module';
import { SliderModule } from 'src/app/components/slider/module/slider/slider.module';
import { ButtonModule } from 'src/app/components/button/module/button/button.module';
import { SlideinfModule } from 'src/app/components/slider-inf/module/slideinf/slideinf.module';
import { CardproductModule } from 'src/app/components/card-product/module/cardproduct/cardproduct.module';
import { NavbarModule } from 'src/app/components/nav-bar/module/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/module/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    Submenu1Module,
    SliderModule,
    ButtonModule,
    SlideinfModule,
    CardproductModule,
    NavbarModule,
    FooterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
