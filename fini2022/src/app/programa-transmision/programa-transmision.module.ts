import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaTransmisionPageRoutingModule } from './programa-transmision-routing.module';

import { ProgramaTransmisionPage } from './programa-transmision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaTransmisionPageRoutingModule
  ],
  declarations: [ProgramaTransmisionPage]
})
export class ProgramaTransmisionPageModule {}
