import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRDPageRoutingModule } from './qr-d-routing.module';
import { QRCodeModule } from 'angularx-qrcode';

import { QrDPage } from './qr-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRDPageRoutingModule,
    QRCodeModule
  ],
  declarations: [QrDPage]
})
export class QRDPageModule {}
