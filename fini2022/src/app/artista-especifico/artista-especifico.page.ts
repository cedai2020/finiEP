import { Component, OnInit } from '@angular/core';

import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { VariablesService } from "../providers/variables.service";

import {Plugins} from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-artista-especifico',
  templateUrl: './artista-especifico.page.html',
  styleUrls: ['./artista-especifico.page.scss'],
})
export class ArtistaEspecificoPage implements OnInit {

  artista:any;

  constructor( public global: VariablesService, private route: ActivatedRoute, public router: Router ) {
    
    //obtenemos el parametro para buscar al artista
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.artista = JSON.parse(params.artista)
      }
      //console.log("el tipo de programa a listar es: " + this.parametro);
    });

   }

  ngOnInit() {
    this.global.titulo = this.global.tituloArtistas;
  }

  async abrirURL(direccion){
    console.log("entro a abrir: " + direccion);
    //const url = 'http://' + direccion;
    const url = direccion;
    await Browser.open({ url: url });
  }

}
