import { AuthGuard } from './usuarios/shared/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    // loadChildren: './tabs/tabs.module#TabsPageModule'
    loadChildren: './tabs/tabs.module#TabsPageModule',canActivate: [AuthGuard]
  },
  { path: 'criar-conta', loadChildren: './usuarios/usuarios/criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'login', loadChildren: './usuarios/usuarios/login/login.module#LoginPageModule' },
  { path: 'esqueci-senha', loadChildren: './usuarios/usuarios/esqueci-senha/esqueci-senha.module#EsqueciSenhaPageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'minhas-presencas', loadChildren: './minhas-presencas/minhas-presencas.module#MinhasPresencasPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'comunicados', loadChildren: './comunicados/comunicados.module#ComunicadosPageModule' },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
