const stockEquipo = 4;
const presupuestoCliente = 950;
const precioSmartphone = 890;

let mensajeEstado = "";

if (stockEquipo <= 0) {
    mensajeEstado = "Equipo sin stock por el momento. Puedes dejar tu reserva.";
} else if (presupuestoCliente >= precioSmartphone) {
    const vuelto = presupuestoCliente - precioSmartphone;
    mensajeEstado = `¡Compra aprobada! Equipo disponible. Tu vuelto o saldo a favor es $${vuelto}.`;
} else {
    const faltante = precioSmartphone - presupuestoCliente;
    mensajeEstado = `Stock disponible, pero te faltan $${faltante} para completar el pago al contado.`;
}

const salida = document.getElementById("resultado-condicional");
if (salida) {
    salida.innerHTML = `<p>${mensajeEstado}</p>`;
}