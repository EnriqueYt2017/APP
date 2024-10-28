import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaInformePageRoutingModule } from '../lista-informe/lista-informe-routing.module';

import { IonicModule } from '@ionic/angular';

import { QrDEstrucPageRoutingModule } from './qr-d-estruc-routing.module';

import { QrDEstrucPage } from './qr-d-estruc.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    QrCodeModule,
    FormsModule,
    IonicModule,
    QrDEstrucPageRoutingModule,
    ListaInformePageRoutingModule,
  ],
  declarations: [QrDEstrucPage]
})
export class QrDEstrucPageModule {}
