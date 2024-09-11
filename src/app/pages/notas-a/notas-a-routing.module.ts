import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasAPage } from './notas-a.page';

const routes: Routes = [
  {
    path: '',
    component: NotasAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasAPageRoutingModule {}
