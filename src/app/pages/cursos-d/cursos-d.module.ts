import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosDPageRoutingModule } from './cursos-d-routing.module';

import { CursosDPage } from './cursos-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosDPageRoutingModule
  ],
  declarations: [CursosDPage]
})
export class CursosDPageModule {}
