import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs' //el of permite convertir algo en un observable
import * as usuariosActions from '../actions'
import { Observable } from 'rxjs/internal/Observable';
import { Action } from '@ngrx/store';
import { map,tap, switchMap, mapTo, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
    constructor(private actions$:Actions, public usuarioService:UsuarioService){

    }

    //@Effect()
    //cargarUsuarios$ = this.actions$.ofType(usuariosActions.CARGAR_USUARIOS)

    @Effect()
    cargarusuarios$: Observable<Action> = this.actions$.pipe(
            ofType(usuariosActions.CARGAR_USUARIOS),    
            switchMap(action=>{
                //se espera que retorne un observable
                
                return this.usuarioService.getUsers()
                            .pipe(map(users=> new usuariosActions.CargarUsuariosSuccess(users)),
                            catchError(error=> of(new usuariosActions.CargarUsuariosFail(error))) //el catch error espera un observable
                            
                            )
            })


    )

    



}