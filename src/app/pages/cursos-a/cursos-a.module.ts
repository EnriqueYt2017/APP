import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosAPageRoutingModule } from './cursos-a-routing.module';

import { CursosAPage } from './cursos-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosAPageRoutingModule
  ],
  declarations: [CursosAPage]
})
export class CursosAPageModule {}
