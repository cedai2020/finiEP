import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-imagen-amplificada',
  templateUrl: './imagen-amplificada.page.html',
  styleUrls: ['./imagen-amplificada.page.scss'],
})
export class ImagenAmplificadaPage implements OnInit {

  img:any;

  constructor( private navParams:NavParams, private modalController:ModalController ) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
    console.log(this.img);
  }

  zoom(zoomIn:boolean){

  }

  close(){
    this.modalController.dismiss();
  }

}
