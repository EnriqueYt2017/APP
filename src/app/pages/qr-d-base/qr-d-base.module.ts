import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrDBasePageRoutingModule } from './qr-d-base-routing.module';
import { ListaInformePageRoutingModule } from '../lista-informe/lista-informe-routing.module';

import { QrDBasePage } from './qr-d-base.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    QrCodeModule,
    FormsModule,
    IonicModule,
    QrDBasePageRoutingModule,
    ListaInformePageRoutingModule
  ],
  declarations: [QrDBasePage]
})
export class QrDBasePageModule {}
