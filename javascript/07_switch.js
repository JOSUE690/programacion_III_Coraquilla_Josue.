let dimension = 4;

switch (dimension) {
    case 1:
        console.log("Estás en la dimensión C-137.");
        break;
    case 2:
        console.log("Estás en la dimensión C-131.");
        break;
    case 3:
        console.log("Estás en la dimensión C-500.");
        break;
    case 4:
        console.log("Dimensión Francisco Higuera.");
        break;
    default:
        console.log("Estás en una dimensión desconocida.");
}

let energia = 50;

switch (true) {
    case (energia > 0 && energia <= 25):
        console.log("Tienes poca energía.");
        break;
    case (energia > 25 && energia <= 50):
        console.log("Tienes energía moderada.");
        break;
    case (energia > 50 && energia <= 75):
        console.log("Tienes buena energía.");
        break;
    case (energia > 75 && energia <= 100):
        console.log("Tienes energía excelente.");
        break;
    default:
        console.log("Nivel de energía fuera de rango.");
}