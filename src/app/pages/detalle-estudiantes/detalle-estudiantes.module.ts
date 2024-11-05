import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleEstudiantesPageRoutingModule } from './detalle-estudiantes-routing.module';

import { DetalleEstudiantesPage } from './detalle-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleEstudiantesPageRoutingModule
  ],
  declarations: [DetalleEstudiantesPage]
})
export class DetalleEstudiantesPageModule {}
