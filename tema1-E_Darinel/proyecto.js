/* Elaborar un pequeño sistema que permita llevar el control de las películas, clientes y rentas 
de una Central de Video. Se pide lo siguiente: */


const prompt = require("prompt-sync")();


//CONTROL DE CLIENTES

class Cliente {
    constructor(numeroDeMembrasia, nombre, direccion, telefono, estado = `libre de multa`) {
        this._numeroDeMembrasia = numeroDeMembrasia;
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
        this._estado = estado;
        this._consulta = [];
    }

    //control de cliente
    InfoCliente() {
        let tamaño = parseInt(prompt("ingrese canridad de personas a registar: "));
        for (let i = 0; i < tamaño; i++) {
            this._numeroDeMembrasia = prompt("ingresa el numero de la membrasia");
            this._nombre = prompt("ingresa el nombre del cliente: ");
            this._direccion = prompt("la direccion del cliente es: ");
            this._telefono = parseInt(prompt("el telefono del cliente es:"));
            this._estado = parseInt(prompt`(1. libre), (2. deudor)`);

            switch (parseInt(this._estado)) {
                case 1:
                    this._estado = 'deudor';
                    break;
                case 2:
                    this._estado = 'libre';
                    break;
            }
            let cliente = {
                numeroDeMembrasia: this._numeroDeMembrasia,
                nombreDelCliente: this._nombre,
                direccion: this._direccion,
                telefono: this._telefono,
                estado: this._estado,
            };
            this._consulta.push(cliente);
        }
        console.log("el cliente se registro correctamente.");
    }

    //baja de cliente
    bajaCliente() {
        for (let i = 0; i < this._consulta.length; i++) {
            if (this._consulta[i].estado === 'deudor') {
                this._consulta.slice(i, 1);
                console.log(`cliente ${this._consulta[1].nombre} con num de membrasia has sido dado de baja `);
            } else {
                console.log(`cliente ${this._consulta[i].nombre} con membrasia con multa`);
            }
        }
    }
}





//CONTROL DE PELICULAS

class peliculas extends Cliente {
    constructor(numPelicula, titulo, clasificacion, estado, tipo) {
        super()
        this._numPelicula = numPelicula;
        this.titulo = titulo;
        this.clasificacion = clasificacion;
        this.estado = estado;
        this.tipo = tipo;
        this._consulPeli = []
    }
    /*     consultaPeliculas(){
            //consulta
            console.log(`numero de la pelicula: ${this.numPelicula}`);
            console.log(`titulo de la pelicula: ${this.titulo}`);
            console.log(`clasificacion: ${this.clasificacion}`);
            console.log(`estado: ${this.estado}`);
            console.log(`tipo: ${this.tipo}`);
        } */


    //regirstar y/o consultar peliculas
    registrarPelis() {
        let tam = parseInt(prompt("cantidad de peliculas a agregar:"));
        for (let i = 0; i < tam; i++) {
            this._numPelicula = parseInt(prompt("ingresa el numero de la pelicula: "));
            this._titulo = prompt("ingresa el titulo de la pelicula: ");
            //this._clasificacion = prompt("ingresa la clasificacion de la pelicula: ");
            this._estado = prompt("ingrese el estado (disponible/rentada): ");

        }
        switch (parseInt(this._disponible)) {
            case 1:
                this._disponible = 'disponible';
                break;
            case 2:
                this._disponible = 'rentada';
                break;
        }
        this._tipo = prompt("tipo de pelicula: (3. estreno), (4. catalogo)");
        switch (parseInt(this._ti)) {
            case 3:
                this._tipo = 'estreno'
                break
            case 4:
                this._tipo = 'catalogo'
                break
        }
        let varea = {
            numeroDeMembrasia: this._numeroDeMembrasia,
            titulo: this._titulo,
            clasificacion: this._clasificacion,
            disponible: this._disponible,
            tipo: this._tipo,
        }
        this._consulPeli.push(varea)
    }

    eliminarpeli() {
        for (let i = 0; i < this._consulPeli.length; i++) {
            if (this._consulPeli[i].disponible === 'rentado') {
                this._consulPeli.slice(i, 1);
                console.log(`la pelicula ${this._consulPeli[i].titulo} se ha rentado`);
            } else {
                console.log(`la pelicula ${this._consulPeli[i].titulo} aun sigue disponible`);

            }
        }
    }

    //CONTROL DE RENTAS 

    rentarPelicula(titulo, verif) {
        let HBOmax = this._consulPeli;
        let peliculaEncontrada = null;
        for (let i = 0; i < HBOmax.length; i++) {
            if (HBOmax[i].titulo === titulo) {
                peliculaEncontrada = HBOmax[i];
                break;
            }
        }

        if (peliculaEncontrada) {
            if (peliculaEncontrada.disponible === 'disponible') {
                let clientesinDeudas = verif._consulta.some(c => c.estado === 'deudor')
                if (clientesinDeudas) {
                    console.log("salir de deudas");
                } else {
                    if (peliculaEncontrada.tipo === 'estreno') {
                        this._precioDePeli = 100;
                    } else if (peliculaEncontrada.tipo === 'catalogo') {
                        this._precioDePeli = 120;
                    }
                    let fechaDeRenta = prompt("ingresa la fecha para la renta de la pelicula(YYYY-MM-DD):");
                    let fechalimite = this.calcularLimite(fechaDeRenta);
                    peliculaEncontrada.disponible = 'se rento';
                    peliculaEncontrada.fechaDeRenta = fechaDeRenta;
                    peliculaEncontrada.fechalimite = fechalimite;
                    console.log(`la peli ${titulo}ya se rento`);
                    console.log(`fecha de devolucion ${peliculaEncontrada.fechalimite}`);
                    console.log(`el precio de la pelicula es de $${this._precioDePeli}`);
                }
            } else {
                console.log("la pelicula no esta disponible");
            }

        }
    }

}



let pelicula = new peliculas();
pelicula.registrarPelis();
pelicula.consultarPelis();
pelicula.registrarPelis();
pelicula.eliminarpeli();
let starfall=new cine ();
starfall.consultarPelis();
let titulo= prompt("ingresa el titulo de la pelicula a rentar: ")
let verificar=pelicula
starfall.rentarPelicula(titulo,verificar)