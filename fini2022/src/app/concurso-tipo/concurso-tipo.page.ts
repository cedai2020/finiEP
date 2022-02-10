import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-concurso-tipo',
  templateUrl: './concurso-tipo.page.html',
  styleUrls: ['./concurso-tipo.page.scss'],
})
export class ConcursoTipoPage implements OnInit {

  constructor( public global: VariablesService, public router: Router ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    //console.log("entra a ionViewWillEnter");
    this.global.titulo = this.global.tituloConcurso;
  }

  goToConcursoEspecifico(tipo)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        tipoConcurso: JSON.stringify(tipo)
      }
    };

    this.router.navigate( ["/tabs/concurso-especifico"], navigationExtras );
  }

  

}
