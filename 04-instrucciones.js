/* const prompt = require('prompt-sync')();  */

/*let numero1= 23;
let numero2= 3;

numero1=parseInt(prompt("ingrese el numero1: "));
numero2=parseInt(prompt("ingresa el valor 2: "));

console.log(23*3);
 */





/* Realizar un programa que contenga un arreglo indefinido,
en el que solicite a travez de teclado el tamaño y se 
ingrese por lo menos 4 valores de cualquier tipo,
utilizando un ciclo para ingresar los datos 
imprimir los valores en pantalla */


/* const prompt = require(`prompt-sync`)();
let numeros = [];

const datosArregloArreglo = () => {
    const cantidad = parseInt(prompt("¿cuantos valores deseas ingresar?"), 10);
    
    for (let i = 0; i < dimension; i++) {
        const valor = parseInt(prompt(`ingresa el valor ${i + 1}: `));
        numeros.push(valor);
    }
    console.log("arreglo:");
    numeros.forEach((numero,index) => {
        console.log(`${index + 1}.${numero}`);
        
    });
}

datosArreglo();

 */




const prompt= require (`prompt-sync`)();
let objetos =[];

const datosArreglo = () => {
    const cantidad=parseInt(prompt("¿cuantos objetos desea ingresar ahora?"), 10);

    for (let i=0; i<cantidad;i ++){
console.log(`ingresa los datos para el objeto ${i + 1}:`);
const nombre = prompt("nombre: ");
const apellido = prompt("apellido: ");
const edad = parseInt(prompt("edad: "));

const objeto = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
};
objetos.push(objeto);
    }
    console.log("objetos ingresados en el arreglo");
    objetos.forEach((objeto,index) => {
        console.log(`${index + 1}. nombre: ${objeto.nombre},apellido: ${objeto.apellido}, edad: ${objeto.edad}`);
    });   
}
datosArreglo();