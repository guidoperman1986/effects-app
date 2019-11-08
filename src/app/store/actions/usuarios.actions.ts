import { Action } from '@ngrx/store'
import { Usuario } from '../../models/usuario.model';


//1: Defino acciones

export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios'
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios FAIL'
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios SUCCESS'

//2: Defino las clases que permiten generar acciones
export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;

    constructor(public payload:any){}
}

export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;

    constructor(public usuarios:Usuario[]){}
}

export type usuariosAcciones = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;

