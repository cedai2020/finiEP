import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService }  from "../providers/web-service.service";
import {URL_ASSETS_CONCURSO} from '../config/url_servicios';

import { ModalController } from '@ionic/angular';
import { ImagenAmplificadaPage } from '../imagen-amplificada/imagen-amplificada.page';

@Component({
  selector: 'app-concurso-especifico-detalle',
  templateUrl: './concurso-especifico-detalle.page.html',
  styleUrls: ['./concurso-especifico-detalle.page.scss'],
})
export class ConcursoEspecificoDetallePage implements OnInit {

  tipoConcurso:string;
  datos:any;
  imagenesConcursante:any;
  url:string;

  constructor( public global: VariablesService, private route: ActivatedRoute, private ws:WebServiceService, public modalController: ModalController ) 
  { 

    this.url = URL_ASSETS_CONCURSO;

    //obtenemos el tipo de concurso
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.tipoConcurso = JSON.parse(params.tipoConcurso);
        this.datos = JSON.parse(params.concursante);
        
        //obtenemos las imagenes del pais, pueden ser una o mas
        this.ws.obtenerImagenesConcursante( this.datos.idconcurso )
        .subscribe(
          (data)=> { 
            this.imagenesConcursante = data;
          },
          (error)=> { console.log(error); }
        )

      }
    });

  }

  ngOnInit() {
    this.global.titulo = this.tipoConcurso;
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
