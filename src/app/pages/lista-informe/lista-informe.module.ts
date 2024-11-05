import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaInformePageRoutingModule } from './lista-informe-routing.module';

import { ListaInformePage } from './lista-informe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaInformePageRoutingModule
  ],
  declarations: [ListaInformePage]
})
export class ListaInformePageModule {}
