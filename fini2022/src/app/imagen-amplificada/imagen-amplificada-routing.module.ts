import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagenAmplificadaPage } from './imagen-amplificada.page';

const routes: Routes = [
  {
    path: '',
    component: ImagenAmplificadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagenAmplificadaPageRoutingModule {}
