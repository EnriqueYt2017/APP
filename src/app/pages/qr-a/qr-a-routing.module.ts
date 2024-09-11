import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrAPage } from './qr-a.page';

const routes: Routes = [
  {
    path: '',
    component: QrAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrAPageRoutingModule {}
