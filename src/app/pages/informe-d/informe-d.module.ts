import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformeDPageRoutingModule } from './informe-d-routing.module';

import { InformeDPage } from './informe-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformeDPageRoutingModule
  ],
  declarations: [InformeDPage]
})
export class InformeDPageModule {}
