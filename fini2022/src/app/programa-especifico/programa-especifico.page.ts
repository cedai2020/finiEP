import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService }  from "../providers/web-service.service";
import { NavigationExtras } from '@angular/router';

import {Plugins} from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-programa-especifico',
  templateUrl: './programa-especifico.page.html',
  styleUrls: ['./programa-especifico.page.scss'],
})
export class ProgramaEspecificoPage implements OnInit {

  diaPrograma:any;
  tipoPrograma:any;
  programas:any;

  constructor( public global: VariablesService, public router: Router, private route: ActivatedRoute, private ws:WebServiceService ) {
    
    //obtenemos el tipo de programa y el dia con los que se filtrara
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.tipoPrograma = JSON.parse(params.tipoPrograma);
        this.diaPrograma = JSON.parse(params.diaPrograma);
      }
      console.log("el tipo de programa a listar es: " + this.tipoPrograma);
      console.log("el dia de programa a listar es: " + this.diaPrograma);
    });

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.ws.obtenerProgramaTipoFecha( this.diaPrograma, this.tipoPrograma )
      .subscribe(
        (data)=> { 
          //console.log(data);
          this.programas = data;
        },
        (error)=> { console.log(error); }
      )
  }

  goToTransmision( programa, enlace )
  {
    //si el enlace es de youtube entonces se muestra en la app, de lo contrario nos abre la pagina web

    if( enlace.includes('https://www.youtube.com/embed/') ){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          programa: JSON.stringify(programa)
        }
      };
      this.router.navigate( ["/tabs/programa-transmision"],  navigationExtras);
    }else{
      this.abrirURL( enlace );
    }
    
  }

  async abrirURL(direccion){
    //console.log("entro a abrir: " + direccion);
    //const url = 'http://' + direccion;
    const url = direccion;
    await Browser.open({ url: url });
  }

}
