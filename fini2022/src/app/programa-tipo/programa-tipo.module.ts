import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaTipoPageRoutingModule } from './programa-tipo-routing.module';

import { ProgramaTipoPage } from './programa-tipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaTipoPageRoutingModule
  ],
  declarations: [ProgramaTipoPage]
})
export class ProgramaTipoPageModule {}
