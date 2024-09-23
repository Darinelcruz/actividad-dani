/* //recursividad
//sucesion->fubionace

function fubionace(valoresRepetir) {
    let arr = [1, 1];
    for (let i = 2; i < valoresRepetir; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}
console.log(fubionace(6));
 */





/* function fibo(n){
/*     let inicial=0
    let temporal=1
    let actual=0
    for (i=0; i<n; i++){

        inicial=temporal
        temporal=actual
        actual=inicial + temporal

        console.log(actual);
    }
}
fibo(6) */



/* function fibionaceRecursivo(n, arre = [0,1]){
    
    if(n<2) return n
    if (arre.length === n){
        console.log(arre);
        return arre;
    }

    arre.push(arre[arre.length - 1] + arre[arre.length - 2]);
    return fibionaceRecursivo(n, arre);
}

fibionaceRecursivo(6);
 */



function fibo(n) {
    if (n < 2) return n
    return fibo(n - 1) + fibo(n - 2);
}

function generarFibonacci(n) {
    let resultado = [];
    for (let i = 0; i < n; i++) {
        resultado.push(fibo(i));
    }
    console.log(resultado);
    return resultado;
}
generarFibonacci(6);