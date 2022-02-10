import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcursoEspecificoDetallePageRoutingModule } from './concurso-especifico-detalle-routing.module';

import { ConcursoEspecificoDetallePage } from './concurso-especifico-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcursoEspecificoDetallePageRoutingModule
  ],
  declarations: [ConcursoEspecificoDetallePage]
})
export class ConcursoEspecificoDetallePageModule {}
