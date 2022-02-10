import { Component, OnInit } from '@angular/core';

import { NavigationExtras } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { VariablesService } from "../providers/variables.service";

@Component({
  selector: 'app-programa-dias',
  templateUrl: './programa-dias.page.html',
  styleUrls: ['./programa-dias.page.scss'],
})
export class ProgramaDiasPage implements OnInit {

  tipoPrograma:string;

  constructor( public global: VariablesService, private route: ActivatedRoute, public router: Router ) {

    //obtenemos el tipo de programa a listar
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.tipoPrograma = JSON.parse(params.tipoPrograma)
      }
      console.log("el tipo de programa a listar es: " + this.tipoPrograma);
    });
    
   }

  ngOnInit() {
    console.log("tipo programa es:: " + this.tipoPrograma);
    this.global.titulo = this.tipoPrograma;
  }

  goToProgramaEspecifico(diaPrograma)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        diaPrograma: JSON.stringify(diaPrograma),
        tipoPrograma: JSON.stringify(this.tipoPrograma)
      }
    };

    this.router.navigate( ["/tabs/programa-especifico"], navigationExtras );
  }

}
