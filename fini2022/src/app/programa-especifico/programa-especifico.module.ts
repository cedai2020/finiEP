import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaEspecificoPageRoutingModule } from './programa-especifico-routing.module';

import { ProgramaEspecificoPage } from './programa-especifico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaEspecificoPageRoutingModule
  ],
  declarations: [ProgramaEspecificoPage]
})
export class ProgramaEspecificoPageModule {}
