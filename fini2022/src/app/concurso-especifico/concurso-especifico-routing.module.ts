import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcursoEspecificoPage } from './concurso-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: ConcursoEspecificoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcursoEspecificoPageRoutingModule {}
