import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'programa-tipo',
        loadChildren: () => import('../programa-tipo/programa-tipo.module').then(m => m.ProgramaTipoPageModule)
      },
      {
        path: 'programa-dias',
        loadChildren: () => import('../programa-dias/programa-dias.module').then(m => m.ProgramaDiasPageModule)
      },
      {
        path: 'programa-especifico',
        loadChildren: () => import('../programa-especifico/programa-especifico.module').then(m => m.ProgramaEspecificoPageModule)
      },
      {
        path: 'programa-transmision',
        loadChildren: () => import('../programa-transmision/programa-transmision.module').then( m => m.ProgramaTransmisionPageModule)
      },
      {
        path: 'concurso-tipo',
        loadChildren: () => import('../concurso-tipo/concurso-tipo.module').then(m => m.ConcursoTipoPageModule)
      },
      {
        path: 'concurso-especifico',
        loadChildren: () => import('../concurso-especifico/concurso-especifico.module').then(m => m.ConcursoEspecificoPageModule)
      },
      {
        path: 'concurso-especifico-detalle',
        loadChildren: () => import('../concurso-especifico-detalle/concurso-especifico-detalle.module').then( m => m.ConcursoEspecificoDetallePageModule)
      },
      {
        path: 'pais-invitado',
        loadChildren: () => import('../pais-invitado/pais-invitado.module').then(m => m.PaisInvitadoPageModule)
      },
      {
        path: 'artista-invitado',
        loadChildren: () => import('../artista-invitado/artista-invitado.module').then(m => m.ArtistaInvitadoPageModule)
      },
      {
        path: 'artista-especifico',
        loadChildren: () => import('../artista-especifico/artista-especifico.module').then(m => m.ArtistaEspecificoPageModule)
      },
      {
        path: 'nosotros',
        loadChildren: () => import('../nosotros/nosotros.module').then(m => m.NosotrosPageModule)
      },
      {
        path: 'buscar',
        loadChildren: () => import('../buscar/buscar.module').then(m => m.BuscarPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
