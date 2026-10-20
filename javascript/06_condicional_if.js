console.log("Misión interdimensional");

let cristalesObjetivos = 200;
let cristalesRecolectados = 150;
let combustibleInicial = 1000;
let combustibleConsumido = 850;
let mortyHerido = "si";
let naveAveriada = "no";
let rickDisponible = "si";
let summerDisponible = "no";

let combustibleRestante = combustibleInicial - combustibleConsumido;
let porcentajeCumplimiento = (cristalesRecolectados / cristalesObjetivos) * 100;

if (combustibleRestante > 100) {
    console.log("Tienes energía suficiente para continuar la aventura.");
} else {
    console.log("Advertencia: Combustible bajo para la aventura.");
}

if (mortyHerido === "si") {
    console.log("Control de viaje: Morty está herido, precaución en la dimensión.");
}

if (rickDisponible === "si") {
    console.log("Viaje Autorizado: Rick está disponible para la misión.");
} else {
    console.log("No puedes viajar a otra dimensión, Rick no está disponible.");
}

if (summerDisponible === "si") {
    console.log("Summer está disponible para la aventura.");
} else {
    console.log("No puedes viajar a otra dimensión, Summer no está disponible.");
}

if (naveAveriada === "si") {
    console.log("No puedes viajar a otra dimensión, la nave está averiada.");
} else {
    console.log("Estado de la nave: Operativa para el salto.");
}

if (rickDisponible === "no" && summerDisponible === "no") {
    console.log("No puedes viajar a otra dimensión, ni Rick ni Summer están disponibles.");
}

if (porcentajeCumplimiento >= 75) {
    console.log("Misión interdimensional exitosa por cumplimiento de cristales.");
} else {
    console.log("Misión interdimensional incompleta. Faltan cristales.");
}