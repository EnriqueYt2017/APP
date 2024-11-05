import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AsistenciaDetallePage } from './asistencias-detalle.page'; // Verifica que este nombre sea correcto
import { AsistenciasDetallePageRoutingModule } from './asistencias-detalle-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciasDetallePageRoutingModule,
  ],
  declarations: [AsistenciaDetallePage], // Verifica que el nombre sea correcto
})
export class AsistenciasDetallePageModule {}