import react from'react'
import propiedades2 from "./Propiedades2";
//import App from "../App";
function propiedades({props}){
    const{nombre, variable1, variable2,varbol}=props;
    const apellidos="cambrano";
   // console.log(varbol);
    return(
        <div>propiedades
            <h1>propiedad 1: {nombre}</h1>
            <h1>propiedad 1: {variable1}</h1>
            <h1>propiedad 3: {variable2} </h1>
            <h1>propiedad 4: {varbol} </h1>
            <h1>Operaciones</h1>
            <h2>suma: {variable1+variable2}</h2>
            <h2>producto: {variable1*variable2}</h2>
            propiedades
        </div>
    );
}

export default propiedades;