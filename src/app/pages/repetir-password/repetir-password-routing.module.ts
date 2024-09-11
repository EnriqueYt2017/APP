import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepetirPasswordPage } from './repetir-password.page';

const routes: Routes = [
  {
    path: '',
    component: RepetirPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepetirPasswordPageRoutingModule {}
