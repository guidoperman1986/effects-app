import * as reducers from './reducers'
import { ActionReducerMap } from '@ngrx/store'

//6:este es el archivo principal de reducers

export interface AppState {
    usuarios:reducers.UsuariosState,
    usuario:reducers.UsuarioState
}

//7:action reducer map que es donde se combinan todos los reducers
export const appReducer:ActionReducerMap<AppState>={
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer
}