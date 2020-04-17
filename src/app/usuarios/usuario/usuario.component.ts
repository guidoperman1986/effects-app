import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuarioActions from '../../store/actions';
import { Usuario } from '../../models/usuario.model';
import { cargarUsuario } from '../../store/actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user:Usuario;
  loading:boolean;
  error:any;

  constructor(private activatedRoute:ActivatedRoute, private store:Store<AppState>) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      const id = params['id'];      
      this.store.dispatch(cargarUsuario({id}));

    })

    this.store.select('usuario').subscribe((usuario:any)=>{
      this.user = usuario.user;
      this.loading = usuario.loading;
      this.error = usuario.error
    })
  }

}
