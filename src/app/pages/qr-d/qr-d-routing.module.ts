import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRDPage } from './qr-d.page';

const routes: Routes = [
  {
    path: '',
    component: QRDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRDPageRoutingModule {}
