import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDPageRoutingModule } from './login-d-routing.module';

import { LoginDPage } from './login-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDPageRoutingModule
  ],
  declarations: [LoginDPage]
})
export class LoginDPageModule {}
