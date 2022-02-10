import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-programa-tipo',
  templateUrl: './programa-tipo.page.html',
  styleUrls: ['./programa-tipo.page.scss'],
})
export class ProgramaTipoPage implements OnInit {

  constructor( public global: VariablesService, public router: Router ) 
  {
    
  }

  ngOnInit() {
    this.global.titulo = this.global.tituloProgramaTipo;
  }

  goToProgramaDias(tipo)
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        tipoPrograma: JSON.stringify(tipo)
      }
    };

    this.router.navigate( ["/tabs/programa-dias"], navigationExtras );
  }

}
