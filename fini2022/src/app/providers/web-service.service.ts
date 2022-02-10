import { Injectable } from '@angular/core';

import {URL_SERVICIOS} from '../config/url_servicios';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor( public http: HttpClient ) { }


  obtenerNosotros(){
    //console.log(URL_SERVICIOS + "obtener_nosotros");
    return this.http.get( URL_SERVICIOS + "obtener_nosotros" );
  }

  obtenerPaisInvitado(){
    //console.log(URL_SERVICIOS + "obtener_pais");
    return this.http.get( URL_SERVICIOS + "obtener_pais" );
  }

  obtenerImagenesPaisInvitado( idpais ){
    //console.log(URL_SERVICIOS + "obtener_imagenes_pais&idpais=" + idpais );
    return this.http.get( URL_SERVICIOS + "obtener_imagenes_pais&idpais=" + idpais );
  }

  obtenerConcurso( tipoConcurso ){
    //console.log(URL_SERVICIOS + "obtener_concurso&tipo=" + tipoConcurso );
    return this.http.get( URL_SERVICIOS + "obtener_concurso&tipo=" + tipoConcurso);
  }

  obtenerImagenesConcursante( idconcurso ){
    //console.log(URL_SERVICIOS + "obtener_imagenes_concursante&idconcurso=" + idconcurso );
    return this.http.get( URL_SERVICIOS + "obtener_imagenes_concursante&idconcurso=" + idconcurso );
  }

  obtenerProgramaTipoFecha( fecha, tipo ){
    //console.log(URL_SERVICIOS + "obtener_programa&fecha=" + fecha + "&tipo=" + tipo );
    return this.http.get( URL_SERVICIOS + "obtener_programa&fecha=" + fecha + "&tipo=" + tipo );
  }

  obtenerArtistas(){
    //console.log(URL_SERVICIOS + "obtener_artistas" );
    return this.http.get( URL_SERVICIOS + "obtener_artistas" );
  }

  buscar_programa( parametroBusqueda ){
    //console.log(URL_SERVICIOS + "busqueda_programa&busqueda=" + parametroBusqueda );
    return this.http.get( URL_SERVICIOS + "busqueda_programa&busqueda=" + parametroBusqueda );
  }

  buscar_concurso( parametroBusqueda ){
    //console.log(URL_SERVICIOS + "busqueda_concurso&busqueda=" + parametroBusqueda );
    return this.http.get( URL_SERVICIOS + "busqueda_concurso&busqueda=" + parametroBusqueda );
  }

  buscar_artistas( parametroBusqueda ){
    //console.log(URL_SERVICIOS + "busqueda_artistas&busqueda=" + parametroBusqueda );
    return this.http.get( URL_SERVICIOS + "busqueda_artistas&busqueda=" + parametroBusqueda );
  }


}
