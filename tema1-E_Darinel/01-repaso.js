/*/ let nombre="dany";
var apellido="cambrano";
const edad=30,"dany";

//edad=25;
nombre="jose"
console.log(´mi nombre es ${nombre}${apellido} y tengo ${edad}´);
*/

let datos1=new Array();
let paises={};
let datos= ["dany",12,["cambrano"],{nombre:"jose", edad:20}];

//console.log(datos);


//tipos de datos
//primitivos 
Number
String
Date
Boolean

//compuestos
/*object
array
function*/


//funciones
function suma (a,b){
    return console.log(a+b);
}

function resta (){
    let a=5;
    let b=3;
    return console.log(a-b);
    
}

//funcion anonima 
const producto =function(a,b){
    return console.log(a*b);
    
}

//funcion flecha o arrow function
const residuo =(a,b)=>{
return console.log(a%b);

}

/* suma (3,4);
resta ();
producto(3,4);
residuo(10,3) */
//estamos trabajando con git

/* function git (){
    console.log("ejemplo de git");
    
} */


    let A =[[3,4,5,6],[]];

    function lectura(){
        for (let i=0;i=i<A.length;i++){
            let valores =A[i];
            console.log(`el valor del indice es ${i} y el dato es ${valores}`);
            
        }
    }