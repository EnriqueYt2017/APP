import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaInformePage } from './lista-informe.page';

const routes: Routes = [
  {
    path: '',
    component: ListaInformePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaInformePageRoutingModule {}
