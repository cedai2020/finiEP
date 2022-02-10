import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { WebServiceService }  from "../providers/web-service.service";
import { NavigationExtras } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import {URL_ASSETS_ARTISTAS} from '../config/url_servicios';

import {Plugins} from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  tipoBusqueda:any;
  inputValue:string;
  divdata:any;
  divdataprograma:any;
  divdataconcurso:any;
  divdataartistas:any;

  programas:any;
  concursos:any;
  artistas:any;

  url:string;

  constructor( public global: VariablesService, private ws:WebServiceService, public router: Router ) { }

  ionViewWillEnter(){
    this.global.titulo = this.global.tituloBuscar;
    this.url = URL_ASSETS_ARTISTAS;
  }
  
  ngOnInit() {
    

    this.tipoBusqueda = 'programa';
  }

  verificar_texto(){
    if(this.inputValue === ""){
      console.log("esta vacio");
      this.divdata= false;
    }else{
      console.log("NO esta vacio");
      this.buscar_programa( this.inputValue );
      this.buscar_concurso( this.inputValue );
      this.buscar_artistas( this.inputValue );
      
      this.divdata= true;
    }
  }

  buscar_programa( valorBusqueda ){
    this.ws.buscar_programa( valorBusqueda )
      .subscribe(
        (data)=> { 
          console.log(data);
          this.programas = data;

          if(data==null){
            this.divdataprograma = false;
          }else{
            this.divdataprograma = true;
          }
        },
        (error)=> { console.log(error); }
      )
  }

  buscar_concurso( valorBusqueda ){
    this.ws.buscar_concurso( valorBusqueda )
      .subscribe(
        (data)=> { 
          console.log(data);
          this.concursos = data;

          if(data==null){
            this.divdataconcurso = false;
          }else{
            this.divdataconcurso = true;
          }
        },
        (error)=> { console.log(error); }
      )
  }

  buscar_artistas( valorBusqueda ){
    this.ws.buscar_artistas( valorBusqueda )
      .subscribe(
        (data)=> { 
          console.log(data);
          this.artistas = data;

          if(data==null){
            this.divdataartistas = false;
          }else{
            this.divdataartistas = true;
          }
        },
        (error)=> { console.log(error); }
      )
  }






  goToConcursante( concursante )
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        concursante: JSON.stringify(concursante),
        tipoConcurso : JSON.stringify( (concursante.nombre).toUpperCase() )
      }
    };
    this.router.navigate( ["/tabs/concurso-especifico-detalle"],  navigationExtras);
  }

  goToArtistaEspecifico(artista)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        artista: JSON.stringify(artista)
      }
    };

    this.router.navigate( ["/tabs/artista-especifico"], navigationExtras );
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
