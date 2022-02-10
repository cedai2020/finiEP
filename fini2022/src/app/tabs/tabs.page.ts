import { Component } from '@angular/core';

import { VariablesService } from "../providers/variables.service";
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  path:string;

  constructor( public global: VariablesService, private route: ActivatedRoute, private router: Router, public nav: NavController ) {
    //this.path = this.route.snapshot._routerState['url'];
    //this.path = this.route['_routerState'].snapshot.url;
    //console.log(this.route['_routerState'].snapshot.url);
    //this.path = this.route.snapshot._urlSegment.segments[this.route.snapshot._urlSegment.segments.length-1]['path'];
  }

  ngOnInit() {
    this.global.titulo = this.global.tituloGeneral;
  }

  goBack(){
    window.history.back();

    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          //console.log('this.router.url', this.router.url);
          if( this.router.url==="/tabs/tab1"){
            this.global.titulo = this.global.tituloGeneral;
          }
          if( this.router.url==="/tabs/programa-tipo"){
            this.global.titulo = this.global.tituloProgramaTipo;
          }
        }
      }
    );

  }

  goHome(){
    //this.router.parseUrl('/');
    //this.router.navigateByUrl('/tabs/tab1', {  replaceUrl: true });
    this.nav.navigateRoot('/tabs/tab1');
  }

  ionViewWillEnter(){
    
  }

  ionViewDidEnter() {

  }

}
