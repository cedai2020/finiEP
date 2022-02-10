import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistaEspecificoPage } from './artista-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistaEspecificoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistaEspecificoPageRoutingModule {}
