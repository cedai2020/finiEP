import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { WebServiceService }  from "../providers/web-service.service";

import {Plugins} from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  nosotros:any;
  semblanza:string;
  sitio_web:string;
  contacto:string;
  youtube:string;
  instagram:string;
  facebook:string;
  twitter:string;

  constructor( public global: VariablesService, private ws:WebServiceService ) { }

  ngOnInit() {
    this.global.titulo = this.global.tituloNosotros;
  }

  ionViewWillEnter(){
    this.ws.obtenerNosotros()
      .subscribe(
        (data)=> { 
          this.semblanza = data[0]['semblanza']; 
          this.sitio_web = data[0]['sitio_web']; 
          this.contacto = data[0]['contacto']; 
          this.youtube = data[0]['youtube']; 
          this.instagram = data[0]['instagram']; 
          this.facebook = data[0]['facebook']; 
          this.twitter = data[0]['twitter']; 
        },
        (error)=> { console.log(error); }
      )
  }

  async abrirURL(direccion){
    //console.log("entro a abrir: " + direccion);
    //const url = 'http://' + direccion;
    const url = direccion;
    await Browser.open({ url: url });
  }

}
