import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { of } from 'rxjs' //el of permite convertir algo en un observable
import * as usuarioActions from '../actions'
import { Observable } from 'rxjs/internal/Observable';
import { Action } from '@ngrx/store';
import { map,tap, switchMap, mapTo, catchError, mergeMap } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions';

@Injectable()
export class UsuarioEffects {
    constructor(private actions$:Actions, public usuarioService:UsuarioService){

    }

    //@Effect()
    //cargarUsuarios$ = this.actions$.ofType(usuariosActions.CARGAR_USUARIOS)

    /* @Effect()
    cargarusuario$: Observable<Action> = this.actions$.pipe(
            ofType(usuarioActions.CARGAR_USUARIO),    
            switchMap(action=>{
                //se espera que retorne un observable
                
                const id = action['id']
                console.log(id)
                return this.usuarioService.getUserById(id)
                            .pipe(map(user=> new usuarioActions.CargarUsuarioSuccess(user)),
                            catchError(error=> of(new usuarioActions.CargarUsuarioFail(error))) //el catch error espera un observable
                            
                            )
            })


    ) */

    cargarusuario$ = createEffect(
        ()=>this.actions$.pipe(
            ofType(cargarUsuario),
            mergeMap(
                (action)=>
                    
                    this.usuarioService.getUserById(action.id)
                        .pipe(
                            tap(
                                data=>console.log('getuser Effect',data)                                
                            ),
                            map(usuario=>cargarUsuarioSuccess({usuario})),
                            catchError(err=>of(cargarUsuarioError({payload:err})))
                        )
                    
            )

        )
    )

    



}