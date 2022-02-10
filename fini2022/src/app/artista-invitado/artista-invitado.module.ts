import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistaInvitadoPageRoutingModule } from './artista-invitado-routing.module';

import { ArtistaInvitadoPage } from './artista-invitado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistaInvitadoPageRoutingModule
  ],
  declarations: [ArtistaInvitadoPage]
})
export class ArtistaInvitadoPageModule {}
