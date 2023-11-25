
let puntaje = 0;

// Estaría faltando un array y métodos de arrays, los que quieras usar o quizás funciones de orden superior. 

const planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];

class Persona {
    constructor(nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }
    verPuntaje() {
        alert(this.nombre + " tu puntaje es " + puntaje);
    }
}


let nombre = prompt("¿Cuál es tu nombre?\n\n ");
let edad = prompt("¿Qué edad tienes?\n\n ");
let pais = prompt("¿De qué pais eres?\n\n ");

const participante = new Persona(nombre, edad, pais);


function iniciarTest() {
    let preguntas = [
        {
            pregunta: "¿De qué color es el sol?",
            opciones: "A : Amarillo \nB : Rojo\nC : blanco",
            respuestaCorrecta: "C",
            mensaje:
                "\n\nA pesar de las ilustraciones en amarillo a las que estamos acostumbrados el color del sol es blanco, de otra manera las nubes, la nieve y los osos polares serian amarillos. El motivo del por qué lo vemos amarillo es por la cantidad de gases y polvo que se acumulan en la atmósfera y dispersan la luz volviendo de ese color el sol durante el atardecer.",
        },
        {
            pregunta: "¿Cuántos planetas hay actualmente en nuestro sistema solar?",
            opciones: "A : 10 \nB : 9 \nC : " + planetas.length + "",
            respuestaCorrecta: "C",
            mensaje:
                "\n\nPlutón fue considerado durante mucho tiempo el noveno planeta de nuestro sistema solar. Hasta 2006 cuando se redefinió lo que significa ser un planeta y en vista de los nuevos requisitos quedó fuera de los otros 8 con la categoría de planeta menor.",
        },
        {
            pregunta: "¿Cuantos oceanos hay en la tierra?",
            opciones: "A : 5\nB : 3\nC : 4",
            respuestaCorrecta: "A",
            mensaje:
                "\n\nDesde el 8 de junio del 2021, se reconoce al Océano Austral como el quinto océano del mundo. Conocido extraoficialmente por muchos años este oceano es el cuerpo de agua que rodea la Antártida.",
        },
        {
            pregunta: "¿Cual es el planeta que está más cerca del sol?",
            opciones: "A : Marte\nB : Mercurio\nC : Venus",
            respuestaCorrecta: "B",
            mensaje: "\n\nDespués el sol el orden es : " + planetas.join(", ") + ".",
        },
        {
            pregunta: "¿Cual es el planeta más caliente del sistema solar?",
            opciones: "A : Mercurio\nB : Venus\nC : Neptuno",
            respuestaCorrecta: "B",
            mensaje:
                "\n\nAunque Mercurio se encuentra más cerca, Venus tiene una atmósfera compuesta por un 96% dióxido de carbono, este gas en exceso atrapa el calor que viene del sol produciendo que el planeta tenga 3 veces la temperatura de Mercurio.",
        },
    ];

    // Funcion de orden superior para hacer las preguntas, evaluar respuestas y sumar el puntaje obtenido.
    preguntas.forEach((p) => {
        let respuesta;
        while ((respuesta != "A") && (respuesta != "B") && (respuesta != "C")) {
            // Guarda la respuesta en mayuscula
            respuesta = prompt("Responde con la letra de cada alternativa\n\n " + p.pregunta + "\n\n" + p.opciones).toUpperCase();

            // Si la respuesta es cualquier otra letra o numero, repite la pregunta
            if (respuesta != "A" && respuesta != "B" && respuesta != "C") {
                alert("Respuesta inválida, intenta de nuevo.")
            } else if (respuesta == p.respuestaCorrecta) {// Si es la respuesta correcta muestra el mensaje de exito, guarda y suma los puntos. 
                puntaje += 2;
                alert("¡Correcto!\n\nTu puntaje es : " + puntaje + p.mensaje)
            } else { // Si no, muestra el mensaje de error con un mensaje del por qué
                alert("Respuesta incorrecta \n\nEs la alternativa " + p.respuestaCorrecta + p.mensaje)

            }
        }
    });


    // Si termina el cuestionario y no alcanza el puntaje necesario para el premio
    if (puntaje < 10) {
        alert("No conseguiste los 10 puntos para el premio, intenta de nuevo!");
        puntaje = 0;
    }
    // Si el puntaje llega a 10, se termina y muestra el mensaje de exito 
    if (puntaje >= 10) {
        alert("¡Felicitaciones " + participante.nombre + "!\n\n¡Has ganado un viaje al espacio en Estación Espacial Internacional!");
        puntaje = 0;
    }


} 
