import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrDBasePage } from './qr-d-base.page';

const routes: Routes = [
  {
    path: '',
    component: QrDBasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrDBasePageRoutingModule {}
