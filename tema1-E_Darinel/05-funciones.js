//factory function
/* const persona1 = {
    nombre:"dany",
    edad:23
}
const persona2 = {
    nombre:"leche",
    edad:20
} */

function datosPersona(nombre,edad){
    return{
        nombre,
        edad,
        active:true
    }
}

let persona1 = datosPersona("dany",23);
let persona2 = datosPersona("leche",20);
//console.log(persona1,persona2);

//camel case
const datosUsuario = {
    nombre:"dari",
    edad:19,
    password:"1234567",
    direccion:{
        colonia:"el carmen",
        calle:"principal",
        numext:123
    },
    sueldo:234.24,
     guardarUsuario:function(){
console.log("guardar usuario...");

    }
}

//datosUsuario.guardarUsuario();

//Add registros y parmetros a los objetos definidos
/* const user={id:1};
user.nombre="dany";
user.guardarUser=function(){
    console.log("guardando user...");
}
console.log(user);
//user.guardarUser(); */

//objetos definidos 
//const person=Object.freeze({id:1,nombre:"dany"});
/* const person=Object.seal({id:1,nombre:"dany"});
person.id=2;
person.nombre="juan"
person.edad=23;

console.log(person); */

//pasar funciones como parametros 
function Pitbull(nombre){
    this.nombre=nombre;
}

function Animal(Fn,argumento){
    return new Fn(argumento)
}

let animal1=Animal(Pitbull,"fidudays")
console.log(animal1);
