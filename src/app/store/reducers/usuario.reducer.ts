import { Usuario } from '../../models/usuario.model';
import * as fromUsuario from '../actions/index'

//Los primeros pasos son los que estan en el archivo usuarios.actions.ts
//3: defino el estado de la aplicacion
export interface UsuarioState {
    user: Usuario
    loaded:boolean;
    loading:boolean;
    error:any;
}

//4: creo el estado inicial de la app
const estadoInicial: UsuarioState = {
    user:null,
    loaded:false,
    loading:false,
    error:null

}

//5: Defino el reducer
export function usuarioReducer (state=estadoInicial, action: fromUsuario.usuarioAcciones):UsuarioState{

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
