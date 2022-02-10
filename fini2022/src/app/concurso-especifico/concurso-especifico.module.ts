import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcursoEspecificoPageRoutingModule } from './concurso-especifico-routing.module';

import { ConcursoEspecificoPage } from './concurso-especifico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcursoEspecificoPageRoutingModule
  ],
  declarations: [ConcursoEspecificoPage]
})
export class ConcursoEspecificoPageModule {}
