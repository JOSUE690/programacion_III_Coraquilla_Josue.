let unidadesDisponibles = 5;
let pedidosProcesados = 0;

const lista = document.getElementById("lista-while");
const resumen = document.getElementById("resumen-while");

while (unidadesDisponibles > 0) {
    pedidosProcesados++;
    unidadesDisponibles--;
    const mensaje = `Pedido #${pedidosProcesados} despachado. Unidades restantes en bodega: ${unidadesDisponibles}`;
    console.log(mensaje);

    if (lista) {
        lista.innerHTML += `<li>${mensaje}</li>`;
    }
}

const finalMsg = "Stock agotado: se completaron todos los pedidos disponibles.";
console.log(finalMsg);
if (resumen) {
    resumen.innerHTML = `<strong>${finalMsg}</strong>`;
}