import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosAPage } from './cursos-a.page';

const routes: Routes = [
  {
    path: '',
    component: CursosAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosAPageRoutingModule {}
