import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCurPageRoutingModule } from './lista-cur-routing.module';

import { ListaCurPage } from './lista-cur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCurPageRoutingModule
  ],
  declarations: [ListaCurPage]
})
export class ListaCurPageModule {}
