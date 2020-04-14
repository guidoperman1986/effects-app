import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuariosActions from '../../store/actions'


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: []
})
export class ListarComponent implements OnInit {
  usuarios:Usuario[] = []
  loading:boolean;
  error:any;

  constructor(public usuarioService:UsuarioService, private store:Store<AppState>) { }

  ngOnInit() {
    /* this.usuarioService.getUsers().subscribe(users=>{
      this.usuarios = users;
    }) */

    //this.store.dispatch(new usuariosActions.CargarUsuarios())
    this.store.dispatch(usuariosActions.cargarUsuarios());

    this.store.select('usuarios').subscribe(users=>{
      this.usuarios = users.users;
      this.loading = users.loading;
      this.error = users.error
    })

    
  }

}
