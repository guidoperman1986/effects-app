/* import { Action } from '@ngrx/store'
import { Usuario } from '../../models/usuario.model';


//1: Defino acciones

export const CARGAR_USUARIO = '[Usuario] Cargar usuario'
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario FAIL'
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar usuario SUCCESS'

//2: Defino las clases que permiten generar acciones
export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;

    constructor(public id:string){}
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL

    constructor(public payload:any){}
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor(public usuario:Usuario){}
}

export type usuarioAcciones = CargarUsuario | CargarUsuarioFail | CargarUsuarioSuccess;
 */

import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction(
    '[Usuario] CargarUsuario',
    props<{id:string}>()
);
export const cargarUsuarioSuccess = createAction(
    '[Usuarios] Cargar Usuarios Success',
    props<{ usuario:Usuario }>()
);
export const cargarUsuarioError = createAction(
    '[Usuarios] Cargar Usuarios Error',
    props<{ payload:any }>()
);