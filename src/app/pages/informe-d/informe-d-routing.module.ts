import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformeDPage } from './informe-d.page';

const routes: Routes = [
  {
    path: '',
    component: InformeDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformeDPageRoutingModule {}
