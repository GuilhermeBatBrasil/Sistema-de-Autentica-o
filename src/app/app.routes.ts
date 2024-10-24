import { Routes } from '@angular/router';
import { CrudUsuariosComponent } from './components/crud-usuarios/crud-usuarios.component';
import { CrudPerfisComponent } from './components/crud-perfis/crud-perfis.component';
import { CrudPermissoesComponent } from './components/crud-permissoes/crud-permissoes.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'usuarios', component: CrudUsuariosComponent },
  { path: 'perfis', component: CrudPerfisComponent },
  { path: 'permissoes', component: CrudPermissoesComponent },
  // { path: '', redirectTo: '', pathMatch: 'full' },
];
