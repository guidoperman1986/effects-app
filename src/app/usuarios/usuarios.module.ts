import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    ListarComponent, 
    UsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListarComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
