import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { Router, ActivatedRoute } from '@angular/router';
import { WebServiceService }  from "../providers/web-service.service";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-concurso-especifico',
  templateUrl: './concurso-especifico.page.html',
  styleUrls: ['./concurso-especifico.page.scss'],
})
export class ConcursoEspecificoPage implements OnInit {

  tipoConcurso:string;
  concursantes:any;

  constructor( public global: VariablesService, public router: Router, private route: ActivatedRoute, private ws:WebServiceService ) {

    //obtenemos el tipo de programa y el dia con los que se filtrara
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.tipoConcurso = JSON.parse(params.tipoConcurso);
      }
      console.log("el tipo de concurso a listar es: " + this.tipoConcurso);
    });

  }

  ngOnInit() {
    this.global.titulo = this.tipoConcurso;
  }

  ionViewWillEnter(){
    this.ws.obtenerConcurso( this.tipoConcurso )
      .subscribe(
        (data)=> { 
          //console.log(data);
          this.concursantes = data;
        },
        (error)=> { console.log(error); }
      )
  }

  goToConcursante( concursante )
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        concursante: JSON.stringify(concursante),
        tipoConcurso : JSON.stringify( this.tipoConcurso )
      }
    };
    this.router.navigate( ["/tabs/concurso-especifico-detalle"],  navigationExtras);
  }
  

}
