import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistaInvitadoPage } from './artista-invitado.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistaInvitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistaInvitadoPageRoutingModule {}
