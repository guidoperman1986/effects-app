import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './usuarios/listar/listar.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';


const routes : Routes = [
    { path: 'home', component: ListarComponent},
    { path: 'usuario/:id', component: UsuarioComponent},
    { path: '**', redirectTo: 'home'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
