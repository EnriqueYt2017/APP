import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEstudiantesPage } from './detalle-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEstudiantesPageRoutingModule {}
