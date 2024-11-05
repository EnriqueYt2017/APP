import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepetPageRoutingModule } from './repet-routing.module';

import { RepetPage } from './repet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepetPageRoutingModule
  ],
  declarations: [RepetPage]
})
export class RepetPageModule {}
