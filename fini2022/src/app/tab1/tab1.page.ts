import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { VariablesService } from "../providers/variables.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  path:string;

  constructor( public router: Router, public global: VariablesService, private route: ActivatedRoute ) {

  }

  ngOnInit() {
    this.global.titulo = this.global.titulo;
  }

  ionViewDidEnter() {

  }

  goToPrograma( )
  {
    this.router.navigate( ["/tabs/programa-tipo"] );
  }

  goToConcurso( )
  {
    this.router.navigate( ["/tabs/concurso-tipo"] );
  }

  goToPais( )
  {
    this.router.navigate( ["/tabs/pais-invitado"] );
  }

  goToArtistas( )
  {
    this.router.navigate( ["/tabs/artista-invitado"] );
  }

  goToNosotros( )
  {
    this.router.navigate( ["/tabs/nosotros"] );
  }

  goToBuscar( )
  {
    this.router.navigate( ["/tabs/buscar"] );
  }

  

}
