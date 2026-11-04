const metodoPago = "TRANSFERENCIA"; // Opciones: EFECTIVO, TARJETA, TRANSFERENCIA, CREDITO

let detallePago = "";

switch (metodoPago.toUpperCase()) {
    case "EFECTIVO":
        detallePago = "Pago en efectivo en tienda física (Quito): 5% de descuento directo.";
        break;
    case "TARJETA":
        detallePago = "Pago con tarjeta de débito o crédito corriente sin recargo.";
        break;
    case "TRANSFERENCIA":
        detallePago = "Transferencia bancaria o Deuna verificada antes del despacho.";
        break;
    case "CREDITO":
        detallePago = "Financiamiento directo o diferido sujetos a validación de requisitos.";
        break;
    default:
        detallePago = "Método de pago no reconocido. Consulta con un asesor.";
        break;
}

console.log(`Método seleccionado: ${metodoPago} -> ${detallePago}`);
const salida = document.getElementById("resultado-switch");
if (salida) {
    salida.innerHTML = `<p><strong>Método (${metodoPago}):</strong> ${detallePago}</p>`;
}