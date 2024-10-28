import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrDDesarroPageRoutingModule } from './qr-d-desarro-routing.module';
import { ListaInformePageRoutingModule } from '../lista-informe/lista-informe-routing.module';

import { QrDDesarroPage } from './qr-d-desarro.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    QrCodeModule,
    FormsModule,
    IonicModule,
    QrDDesarroPageRoutingModule,
    ListaInformePageRoutingModule
  ],
  declarations: [QrDDesarroPage]
})
export class QrDDesarroPageModule {}
