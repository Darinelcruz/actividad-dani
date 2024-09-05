//definir claes con atributos dentro del constructor

class persona {
    constructor(nombre, edad, sexo, direccion) {
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
        this._direccion = direccion;
    }
    //metodo saludar
    saludar() {
        console.log(`hola ${this.nombre}`);

    }

    //encapsulamientio setter y getter (mandar a llamar la propiedad y rescribir la propidad).
    get nombre(){
        return this._nombre
    }
    set nombre(values){
        this._nombre=values;
    }
}

let persona1 = new persona("dany", 23, "M", "Balancan");
persona1.nombre = "juan";
console.log(persona1);
persona1.saludar();