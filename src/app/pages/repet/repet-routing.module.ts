import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepetPage } from './repet.page';

const routes: Routes = [
  {
    path: '',
    component: RepetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepetPageRoutingModule {}
