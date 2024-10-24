/* class persona{
    constructor ()
}


class materias{
constructor()
  

}

class materias  */




class alumno extends persona{
    constructor(nombre, apellidos, horario, matricula, carrera, semestre){    
       super(nombre, apellidos,horario);
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._horarios=horario;
        this._matricula=matricula;
        this._carrera=carrera;
        this._semestre=semestre;
    }

    mensaje(){
        console.log(`soy el alumno ${this._nombre} y estudio la carrera de ${this._carrera}`);
        
    }
}
