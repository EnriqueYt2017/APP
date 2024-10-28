import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRDPageRoutingModule } from './qr-d-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { ListaInformePageRoutingModule } from '../lista-informe/lista-informe-routing.module';

import { QrDPage } from './qr-d.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    QrCodeModule,
    FormsModule,
    IonicModule,
    QRDPageRoutingModule,
    ListaInformePageRoutingModule
  ],
  declarations: [QrDPage]
})
export class QRDPageModule {}
