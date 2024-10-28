import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrDPage } from './qr-d.page';

const routes: Routes = [
  {
    path: '',
    component: QrDPage
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRDPageRoutingModule {}
