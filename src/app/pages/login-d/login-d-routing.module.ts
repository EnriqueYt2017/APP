import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDPage } from './login-d.page';

const routes: Routes = [
  {
    path: '',
    component: LoginDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginDPageRoutingModule {}
