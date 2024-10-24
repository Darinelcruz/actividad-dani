class Estudiante {
    constructor(numControl, nombre) {
        this.numControl = numControl;
        this.nombre = nombre;
        this.calificaciones = [];
    }

    agregar(materia, docente, calificaciones) {
        this.calificaciones.push({ materia, docente, calificaciones });
    }

    calcularPromedio(materia) {
        const calificacion = this.calificaciones.find(c => c.materia === materia);
        if (calificacion) {
            const suma = calificacion.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
            return suma / calificacion.calificaciones.length;
        }
        return 0;
    }
}

const estudiantes = [
    new Estudiante("23E20107", "Dany"),
    new Estudiante("23E20105", "Luis")
];

estudiantes[0].agregar("matematicas", "Jose", [90, 95]);
estudiantes[0].agregar("fisica", "pedro", [85, 75]);
estudiantes[0].agregar("programacion", "juan", [30, 30]);

estudiantes[1].agregar("matematicas", "jose", [75, 85]);
estudiantes[1].agregar("fisica", "pedro", [70, 30]);



function imprimirNotas(estudiantes) {
    console.log("Tabla de calificaciones");
    console.log("No.Control|Estudiante|   Materia  | Docente  |Calificaciones|Promedio");
    console.log("----------------------------------------------------------------------");
    estudiantes.forEach(estudiante => {
        estudiante.calificaciones.forEach(calificacion => {
            const promedio = estudiante.calcularPromedio(calificacion.materia);
            console.log(`${estudiante.numControl.toString().padEnd(8)}| ${estudiante.nombre.padEnd(11)} | ${calificacion.materia.padEnd(10)} | ${calificacion.docente.padEnd(8)} | ${calificacion.calificaciones.join(", ")} | ${promedio.toFixed(2)}`);
        });
    });
}
imprimirNotas(estudiantes);