import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaTipoPage } from './programa-tipo.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaTipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaTipoPageRoutingModule {}
