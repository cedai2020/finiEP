import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaisInvitadoPage } from './pais-invitado.page';

const routes: Routes = [
  {
    path: '',
    component: PaisInvitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisInvitadoPageRoutingModule {}
