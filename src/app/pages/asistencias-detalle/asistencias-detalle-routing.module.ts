import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaDetallePage } from './asistencias-detalle.page'; // Cambiado

const routes: Routes = [
  {
    path: '',
    component: AsistenciaDetallePage, // Cambiado
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciasDetallePageRoutingModule {} // 