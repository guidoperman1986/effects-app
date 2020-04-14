/* import { Usuario } from '../../models/usuario.model';
import * as fromUsuario from '../actions/index'

//Los primeros pasos son los que estan en el archivo usuario.actions.ts
//3: defino el estado de la aplicacion
export interface Usuariotate {
    user: Usuario
    loaded:boolean;
    loading:boolean;
    error:any;
}

//4: creo el estado inicial de la app
const estadoInicial: Usuariotate = {
    user:null,
    loaded:false,
    loading:false,
    error:null

}

//5: Defino el reducer
export function usuarioReducer (state=estadoInicial, action: fromUsuario.usuarioAcciones):Usuariotate{

    switch (action.type){
        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading:true,
                error:null
            }
        
        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading:false,
                loaded:true,
                user:{...action.usuario}
            };
        
        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loaded:false,
                loading:false,
                error:{
                    status:action.payload.status,
                    message:action.payload.message,
                    url:action.payload.url
                }
            }

        default:
            return state;
    }

}
 */

import { createReducer, on } from '@ngrx/store';
import { cargarUsuarioError,cargarUsuarioSuccess, cargarUsuario } from '../actions';
import { Usuario } from 'src/app/models/usuario.model';

export interface UsuarioState {
    id: string,
    user: Usuario[],
    loaded:boolean,
    loading: boolean,
    error:any
}

export const usuarioInitialState: UsuarioState = {
    id: null,
    user: null, 
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on(cargarUsuario, (state, {id}) => ({ ...state, loading:true, id:id})),
    on(cargarUsuarioSuccess, (state, {usuario}) => ({ 
            ...state, 
            loading:false,
            loaded:true,
            users:{...usuario}
        })
    ),
    on(cargarUsuarioError,(state, {payload})=>({
            ...state, 
            loading:false,
            loaded:true,        
            error:payload
        })
    )

);

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}

