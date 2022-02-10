import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagenAmplificadaPageRoutingModule } from './imagen-amplificada-routing.module';

import { ImagenAmplificadaPage } from './imagen-amplificada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagenAmplificadaPageRoutingModule
  ],
  declarations: [ImagenAmplificadaPage]
})
export class ImagenAmplificadaPageModule {}
