import { createContext } from "react";
import {usuarios} from "../panel/lista_usuarios"

// const usuario={
//     username:"Axel Bresanovich",
//     correo:"Bresanovichaxel43@gmail.com",
//     contraseña: "1234"    
// }

export const AuthContext = createContext(usuarios);

export const AuthProvider = ({ children }) => {

    return (
        <AuthContext.Provider value={usuarios}>
            {children}
        </AuthContext.Provider>
    )
}
