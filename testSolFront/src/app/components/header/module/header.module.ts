import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header.component';
import { IonicModule } from '@ionic/angular';
import { SearchModule } from '../../search/module/search/search.module';
import { DropdownModule } from '../../dropdown/module/dropdown/dropdown.module';
import { IconlaikaModule } from '../../icon-laika/module/iconlaika/iconlaika.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    SearchModule,
    DropdownModule,
    IconlaikaModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
