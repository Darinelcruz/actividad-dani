
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
        console.log('${i}=${v}');
    }}


//for in 
let C = [[3,4,5,6],[7,8,9]];

for (let i in C){
    let fil = C[i];
    for (let j in fil){
        console.log([i]+":"+C);
    }
}

//for each 
let D = [[3,4,5,6],[7,8,9]];

const datos=()=>{
    datosArreglo.forEach((fil,i)=>{
        fil.forEach((valores,j)=>{
            console.log(`${i}:${j}=${valor}`);
        })
    })
}

//while 
let H = [[3,4,5,6],[7,8,9]];

const datosArr =()=>{}
let i=0;
while(i<H.length){
    let fil=H[i];
    let H=0;
    while(H< fil.length){
console.log();

    }
}