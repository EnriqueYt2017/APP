import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepetirPasswordPageRoutingModule } from './repetir-password-routing.module';

import { RepetirPasswordPage } from './repetir-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepetirPasswordPageRoutingModule
  ],
  declarations: [RepetirPasswordPage]
})
export class RepetirPasswordPageModule {}
