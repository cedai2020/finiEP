import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'programa-tipo',
    loadChildren: () => import('./programa-tipo/programa-tipo.module').then( m => m.ProgramaTipoPageModule)
  },
  {
    path: 'programa-dias',
    loadChildren: () => import('./programa-dias/programa-dias.module').then( m => m.ProgramaDiasPageModule)
  },
  {
    path: 'programa-especifico',
    loadChildren: () => import('./programa-especifico/programa-especifico.module').then( m => m.ProgramaEspecificoPageModule)
  },
  {
    path: 'concurso-tipo',
    loadChildren: () => import('./concurso-tipo/concurso-tipo.module').then( m => m.ConcursoTipoPageModule)
  },
  {
    path: 'concurso-especifico',
    loadChildren: () => import('./concurso-especifico/concurso-especifico.module').then( m => m.ConcursoEspecificoPageModule)
  },
  {
    path: 'pais-invitado',
    loadChildren: () => import('./pais-invitado/pais-invitado.module').then( m => m.PaisInvitadoPageModule)
  },
  {
    path: 'artista-invitado',
    loadChildren: () => import('./artista-invitado/artista-invitado.module').then( m => m.ArtistaInvitadoPageModule)
  },
  {
    path: 'artista-especifico',
    loadChildren: () => import('./artista-especifico/artista-especifico.module').then( m => m.ArtistaEspecificoPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'concurso-especifico-detalle',
    loadChildren: () => import('./concurso-especifico-detalle/concurso-especifico-detalle.module').then( m => m.ConcursoEspecificoDetallePageModule)
  },
  {
    path: 'programa-transmision',
    loadChildren: () => import('./programa-transmision/programa-transmision.module').then( m => m.ProgramaTransmisionPageModule)
  },
  {
    path: 'imagen-amplificada',
    loadChildren: () => import('./imagen-amplificada/imagen-amplificada.module').then( m => m.ImagenAmplificadaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
