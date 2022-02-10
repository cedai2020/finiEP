import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistaEspecificoPageRoutingModule } from './artista-especifico-routing.module';

import { ArtistaEspecificoPage } from './artista-especifico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistaEspecificoPageRoutingModule
  ],
  declarations: [ArtistaEspecificoPage]
})
export class ArtistaEspecificoPageModule {}
