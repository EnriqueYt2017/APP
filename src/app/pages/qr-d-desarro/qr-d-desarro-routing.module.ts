import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrDDesarroPage } from './qr-d-desarro.page';

const routes: Routes = [
  {
    path: '',
    component: QrDDesarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrDDesarroPageRoutingModule {}
