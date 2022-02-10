import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaEspecificoPage } from './programa-especifico.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaEspecificoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaEspecificoPageRoutingModule {}
