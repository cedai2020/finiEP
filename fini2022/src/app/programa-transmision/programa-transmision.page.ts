import { Component, OnInit } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-programa-transmision',
  templateUrl: './programa-transmision.page.html',
  styleUrls: ['./programa-transmision.page.scss'],
})
export class ProgramaTransmisionPage implements OnInit {

  items:any;

  constructor( public global: VariablesService, private route: ActivatedRoute, public  sanitizer:DomSanitizer ) 
  { 
    //obtenemos el tipo de programa y el dia con los que se filtrara
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.items = JSON.parse(params.programa);
      }
    });
  }

  ngOnInit() {
    this.global.titulo = this.global.tituloProgramaTransmision;
  }

  ionViewWillEnter(){
    
  }

}
