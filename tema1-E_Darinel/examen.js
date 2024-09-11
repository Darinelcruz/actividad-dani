const PromptSync = require("prompt-sync");

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
 