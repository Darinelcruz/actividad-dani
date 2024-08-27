/*/realizar un arreglo con dos dimensiones
y guardar dos arreglos internos y dar lectura a los
datos internos*/



//A.map

let A=[[3,4,5,6],[7,8,9]];

const datosArreglo=()=> {
    A.map((datos)=> {
        datos.map((valores,i)=>{
            console.log('${i}=${valores}');
        })
    });
};





//for of 
let B =[[3,4,5,6],[7,8,9]];

for (let fil of B){
    for (let[i,v] of fil.entries()){
        console.log(`${i}=${v}`);
    }
};




//for in 
let C = [[3,4,5,6],[7,8,9]];

for (let i in C){
    let fil = C[i];
    for (let j in fil){
        console.log(`${i}:${j}=${fil[j]}`);
    }
}



//for each 
let D = [[3,4,5,6],[7,8,9]];

const datos=()=>{
   D.forEach((fil,i)=>{
        fil.forEach((valores,j)=>{
            console.log(`${i}:${j}=${valores}`);
        })
    })
}

datos();





//while 
let H = [[3,4,5,6],[7,8,9]];

const datosArr =()=>{}
let i=0;
while(i<H.length){
    let valor=H[i];
    let H=0;
    while(H< v.length){
console.log(valor[j]);
j++;
    }
    j++;
};





//function flecha
let arregloi2 = [[3,4,5,6],[7,8,9]];

const leera3=()=>{
    arregloi2.forEach((subArreglo,index)=>{
        console.log(`subarreglo $ {index + 1};`);
        subArreglo.forEach((Elemento)=>{
            console.log(Elemento);
        });
    });
};
