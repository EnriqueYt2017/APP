import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrDEstrucPage } from './qr-d-estruc.page';

const routes: Routes = [
  {
    path: '',
    component: QrDEstrucPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrDEstrucPageRoutingModule {}
