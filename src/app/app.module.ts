import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CervezaComponent } from './components/cerveza/cerveza.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CervezaComponent,
    CervezasComponent,
    ListadoComponent,
    FormularioComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
