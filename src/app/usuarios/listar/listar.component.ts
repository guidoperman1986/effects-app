import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: []
})
export class ListarComponent implements OnInit {
  usuarios:Usuario[] = []

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe(users=>{
      this.usuarios = users;
    })
  }

}
