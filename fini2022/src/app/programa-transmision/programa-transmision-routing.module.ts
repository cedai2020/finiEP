import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaTransmisionPage } from './programa-transmision.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaTransmisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaTransmisionPageRoutingModule {}
