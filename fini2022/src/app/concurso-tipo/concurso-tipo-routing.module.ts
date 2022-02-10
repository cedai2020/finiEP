import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcursoTipoPage } from './concurso-tipo.page';

const routes: Routes = [
  {
    path: '',
    component: ConcursoTipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcursoTipoPageRoutingModule {}
