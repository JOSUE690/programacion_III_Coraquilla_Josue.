const precioEquipo = 450;
const cantidad = 2;
const envio = 12;
const porcentajeDescuento = 0.10; // 10%

const subtotal = precioEquipo * cantidad;
const ahorro = subtotal * porcentajeDescuento;
const totalPagar = subtotal - ahorro + envio;
const superaEnvioGratis = subtotal >= 800;

const salida = document.getElementById("resultado-operadores");
if (salida) {
    salida.innerHTML = `
        <p>Subtotal (${cantidad} equipos a $${precioEquipo}): $${subtotal}</p>
        <p>Descuento (10%): -$${ahorro.toFixed(2)}</p>
        <p>Envío: $${envio}</p>
        <p><strong>Total a pagar: $${totalPagar.toFixed(2)}</strong></p>
        <p>¿Califica para envío gratis en compras >= $800?: ${superaEnvioGratis ? "Sí" : "No"}</p>
    `;
}