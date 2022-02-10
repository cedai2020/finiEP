import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { WebServiceService }  from "../providers/web-service.service";

@Component({
  selector: 'app-artista-invitado',
  templateUrl: './artista-invitado.page.html',
  styleUrls: ['./artista-invitado.page.scss'],
})
export class ArtistaInvitadoPage implements OnInit {

  artistas:any;

  constructor( public global: VariablesService, private route: ActivatedRoute, public router: Router, private ws:WebServiceService ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.global.titulo = this.global.tituloArtistas;

    this.ws.obtenerArtistas()
      .subscribe(
        (data)=> { 
          //console.log(data);
          this.artistas = data;
        },
        (error)=> { console.log(error); }
      )
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

}
