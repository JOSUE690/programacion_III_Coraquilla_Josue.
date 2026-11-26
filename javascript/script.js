console.log("¡Hola desde mi archivo de JavaScript!");


let vidas= 3;
console.log("registro de cuentas vidas nos quedan ");
console.log(vidas);


console.error("¡Cuidado! No se pudo conectar a la base de datos.");

console.warn("Atención: Tu contraseña es demasiado corta.");


const estudiantes=[
    
    {Nombre: "Josue", Edad: 20},
    {Nombre: "Josue", Edad: 20}

]
console.table(estudiantes);





let respuestaUsuario = "sapa inca";

if (respuestaUsuario === "sapa inca") {
    console.log("¡Correcto! Tienes un punto.");
} else {
    console.log("Incorrecto, intenta de nuevo.");
}


let numero = 4;
if (numero=== 7){
    console.log( "correcto premio");
}
else{
    console.log("incorrecto");
    
}



let respuesta = "1532";
if (respuesta === "1532") {
    console.log("¡Respuesta correcta!");
} else {
    console.log("Respuesta incorrecta.");
}


function calificarExamen() {
    console.log("Calculando notas...");
}

const preguntasAtahualpa = ["¿Quién fue el Sapa Inca?", "¿En qué año llegó Pizarro?"];




// 1. Creamos la función (la receta)
function calificarExamen() {
    console.log("Calculando notas...");
}

// 2. Creamos la lista de preguntas
const preguntasAtahualpa = ["¿Quién fue el Sapa Inca?", "¿En qué año llegó Pizarro?"];

// --- AQUÍ ESTÁ EL TRUCO ---
// Para que la terminal muestre algo, tenemos que ejecutar las cosas:

// A) Llamamos a la función para que se active:
calificarExamen();

// B) Imprimimos la lista de preguntas en la consola para verla:
console.log(preguntasAtahualpa);