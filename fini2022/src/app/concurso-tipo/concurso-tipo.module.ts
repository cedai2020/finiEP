import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcursoTipoPageRoutingModule } from './concurso-tipo-routing.module';

import { ConcursoTipoPage } from './concurso-tipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcursoTipoPageRoutingModule
  ],
  declarations: [ConcursoTipoPage]
})
export class ConcursoTipoPageModule {}
