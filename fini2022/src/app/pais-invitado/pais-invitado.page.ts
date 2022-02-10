import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import {URL_ASSETS_PAIS} from '../config/url_servicios';
import { WebServiceService }  from "../providers/web-service.service";

import { ModalController } from '@ionic/angular';
import { ImagenAmplificadaPage } from '../imagen-amplificada/imagen-amplificada.page';

@Component({
  selector: 'app-pais-invitado',
  templateUrl: './pais-invitado.page.html',
  styleUrls: ['./pais-invitado.page.scss'],
})
export class PaisInvitadoPage implements OnInit {

  nombre:string;
  idpais:any;
  bandera:string;
  imagenesPais:any;
  semblanza:string;
  url:string;

  constructor( public global: VariablesService, private ws:WebServiceService, public modalController: ModalController ) { }

  ngOnInit() {
    this.global.titulo = this.global.tituloPais;
  }

  ionViewWillEnter(){
    this.url = URL_ASSETS_PAIS;

    this.ws.obtenerPaisInvitado()
      .subscribe(
        (data)=> { 
          this.idpais = data[0]['idpais']; 
          this.semblanza = data[0]['semblanza']; 
          this.nombre = data[0]['nombre']; 
          this.bandera = URL_ASSETS_PAIS + data[0]['bandera'];

          //obtenemos las imagenes del pais, pueden ser cuatro o mas
          this.ws.obtenerImagenesPaisInvitado( this.idpais )
          .subscribe(
            (data)=> { 
              this.imagenesPais = data;
            },
            (error)=> { console.log(error); }
          )

        },
        (error)=> { console.log(error); }
      )

      
  }

  openPreview(imagen){
    var url = this.url + imagen;
    this.modalController.create({
      component: ImagenAmplificadaPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps:{
        img:url
      }
    }).then(modal => modal.present() );

  }

}
