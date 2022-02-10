import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaDiasPage } from './programa-dias.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaDiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaDiasPageRoutingModule {}
