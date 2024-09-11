import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasAPageRoutingModule } from './notas-a-routing.module';

import { NotasAPage } from './notas-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasAPageRoutingModule
  ],
  declarations: [NotasAPage]
})
export class NotasAPageModule {}
