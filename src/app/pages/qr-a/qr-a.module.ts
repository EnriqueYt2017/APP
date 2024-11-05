import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrAPageRoutingModule } from './qr-a-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { QrAPage } from './qr-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrAPageRoutingModule,
    QRCodeModule
  ],
  declarations: [QrAPage]
})
export class QrAPageModule {}