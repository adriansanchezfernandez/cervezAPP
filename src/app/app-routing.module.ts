import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { CervezasComponent } from './components/cervezas/cervezas.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CervezaComponent } from './components/cerveza/cerveza.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cervezas', component: CervezasComponent },
  { path: 'cerveza/:id', component: CervezaComponent },
  { path: 'buscador/:term', component: BuscadorComponent },
  { path: 'formulario/:id', component: FormularioComponent, canActivate:[AuthGuard] },
  { path: 'listado', component: ListadoComponent,canActivate:[AuthGuard] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
