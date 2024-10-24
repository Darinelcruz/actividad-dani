/* rfce */
import React from 'react'

function Estados() {
    const AgregarValor=()=>{
        console.log("incrementar el valor");
        
    }
  return (
    <div>Estados
        <h1>Agregar valor{valor}</h1>
        <button onClick={()=> console.log("incrementa el valor")}>incrementa</button>;
    </div>
  )
}

export default Estados