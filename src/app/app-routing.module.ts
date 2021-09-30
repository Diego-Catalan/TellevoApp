import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recupass',
    loadChildren: () => import('./recupass/recupass.module').then( m => m.RecupassPageModule)
  },
  {
    path: 'codrecu',
    loadChildren: () => import('./codrecu/codrecu.module').then( m => m.CodrecuPageModule)
  },


];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
