import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaDiasPageRoutingModule } from './programa-dias-routing.module';

import { ProgramaDiasPage } from './programa-dias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaDiasPageRoutingModule
  ],
  declarations: [ProgramaDiasPage]
})
export class ProgramaDiasPageModule {}
