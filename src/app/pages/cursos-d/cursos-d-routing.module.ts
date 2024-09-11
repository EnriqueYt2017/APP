import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosDPage } from './cursos-d.page';

const routes: Routes = [
  {
    path: '',
    component: CursosDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosDPageRoutingModule {}
