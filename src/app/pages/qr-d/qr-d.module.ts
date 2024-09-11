import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRDPageRoutingModule } from './qr-d-routing.module';

import { QRDPage } from './qr-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRDPageRoutingModule
  ],
  declarations: [QRDPage]
})
export class QRDPageModule {}
