/* const PromptSync = require("prompt-sync");

const prompt = require(`prompt sync`)();
class empleados {
    constructor(nombre, apellidos, RFC, direccion, telefono) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._RFC = RFC;
        this._direccion = direccion;
        this._telefono = telefono;
        this._horasExtras = horasExtras;
        this._sueldo=sueldo;
    }
get nombre (){
    return this._nombre
}
set nombre(value){
    this._nombre=value;
}
get apellidos (){
    return this._apellidos
}
set apellidos(value){
    this._apellidos=value;
}
get RFC (){
    return this._RFC
}
set RFC(value){
    this._RFC=value;
}
get direccion (){
    return this._direccion
}
set direccion(value){
    this._direccion=value;
}
get telefono (){
    return this._telefono
}
set telefono(value){
    this._telefono=value;
}
saludar(){
    console.log(`empleado creado:`);
    console.log(`nombre: ${empleados._nombre}`);
    console.log(`apellidos: ${empleados._apellidos}`);
    console.log(`RFC: ${empleados._RFC}`);
    console.log(`direccion: ${empleados._direccion}`);
    console.log(`telefono: ${empleados._telefono}`);
    console.log(`horas extras: ${empleados._horasExtras}`);
    console.log(`sueldo: ${empleados._sueldo}`);
}
}
 */


//evaluacion tema 1 
const Prompt = require("prompt-sync")();
const porc = 0.15
class cooperativa {
    constructor(nombre, apellidos, RFC, direccion, telefono, hrstra, cosxhra) {
        this._nombre = nombre;
        this.apellidos = apellidos;
        this.RFC = RFC;
        this.direccion = direccion;
        this.telefono = telefono;
        this.cosxhra = cosxhra;
        this.hrstra = hrstra;
        this.agregarEm = [];
        this._sueldo = 0;

    }
    //getter
    //setter

    agregarEm() {
        let tam = parseInt(prompt("cantidad de empleados a dar de alta"));
        for (let i = 0; i < tam; i++) {
            this._nombre = prompt("ingresa el nombre del empleado: ");
            this._hrstra = parseInt(prompt("numero de horas trabajadas"));
            this._costxhra = parseFloat(prompt("ingrese el costo por hora"));
            let empleado = {
                nombre: this._nombre,
                horastra: this._hrstra,
                cosxhra: this.cosxhra,
                sueldo: this.calcularSueldo()
            };
            this._agregarEm.push(empleado);
        }

    }

    eliminarEmp() {
        this._agregarEm.length > 0
            ? this._agregarEm.pop()
            : console.log("no hay registro que eliminar");

        this.mostrarEmpleados();
    }

    calcularSueldo() {
        if (this._hrstra > 8) {
            this._sueldo = this._costxhra * this._hrstra;
            return (this._sueldo =
                this._sueldo + this._costxhra * porc * (this._hrstra - 8));
        } else {
            return (this._sueldo = this._costxhra * this._hrstra);
        }
    }
    mostrarEmpleados() {
        this._agregarEmp.length > 0
            ? this._agregarEmp.map((emp) => {
                console.log(
                    `el nombre es ${emp.nombre} y tiene un sueldo${emp.sueldo}`
                );

            }) : console.log("no hay datos que mostrar");

    }
/*     menulista() {
        let listar = parseInt(prompt("que desea hacer: 1. agregar, 2.mostrar, 3. eliminar, 4.eliminar"))
        while (listar != 4) {
            switch (listar) {
                case 1:
                    this.agregarEmp();
                case 2:
                    break;
                    this.mostrarEmpleados();
                case 3:
                    this.eliminarEmp();
                    break;
                case 4:
                    break;
            }
        }
    } */
}

let empleados = new cooperativa();
empleados.agregarEmp();
empleados.mostrarEmpleados();
empleados.eliminarEmp();
empleados.menulista();