import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCurPage } from './lista-cur.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCurPageRoutingModule {}
