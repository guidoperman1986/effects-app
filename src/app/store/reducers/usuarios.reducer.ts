import { Usuario } from '../../models/usuario.model';
import * as fromUsuarios from '../actions/index'

//Los primeros pasos son los que estan en el archivo usuarios.actions.ts
//3: defino el estado de la aplicacion
export interface UsuariosState {
    users: Usuario[]
    loaded:boolean;
    loading:boolean;
    error:any;
}

//4: creo el estado inicial de la app
const estadoInicial: UsuariosState = {
    users:[],
    loaded:false,
    loading:false,
    error:null

}

//5: Defino el reducer
export function usuariosReducer (state=estadoInicial, action: fromUsuarios.usuariosAcciones):UsuariosState{

    switch (action.type){
        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading:true,
                error:null
            }
        
        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading:false,
                loaded:true,
                users:[...action.usuarios]
            };
        
        case fromUsuarios.CARGAR_USUARIOS_FAIL:
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
