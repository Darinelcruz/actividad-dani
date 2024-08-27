// crear una lista de datos con diferentes tipos de datos 

let datos = [{
    nombre: "dari",
    apellido: "cruz",
    edad: 19,
    estudiante: "true"
},
{
    nombre: "axl",
    apellido: "gamas",
    edad: "15",
    estudiante: true,
}
];


let arreglo = ["dari", 19, true];

const info = () => {
    /* for(let arr in arreglo){
         console.log(arreglo[arr]);
    }    */


    /*   for (let lis in datos) {
         console.log(`${lis}:${datos[lis]}`);
 
     } */



    /*  let loco = Object.values(datos)
     loco.map((data,index) => {
         console.log(`${data}`);
     });*/




    /*/ let valores = Object.values(datos);
     for (let informacion of valores) {
         console.log(informacion);
     }*/



    /*/ let valores=Object.entries(datos);
     valores.map(dat=>{
         console.log(dat);
         
     })*/


    /*/ Object.entries(datos).forEach(([key, value]))
     console.log(`${key}: ${value}`);*/




    datos.map((data) => {
        console.log(`el nombre es: ${data.nombre} ${data.apellido} y tiene ${15} años`);

    })


};
info();