const modeloInput = document.getElementById("modelo-input");
const precioInput = document.getElementById("precio-input");
const btnCotizar = document.getElementById("btn-cotizar");
const salidaValue = document.getElementById("salida-value");

function mostrarCotizacion() {
    const modelo = (modeloInput?.value || "").trim() || "Equipo Móvil";
    const precio = Number(precioInput?.value) || 0;
    const precioFinal = (precio * 0.9).toFixed(2);

    if (salidaValue) {
        salidaValue.innerHTML = `<strong>${modelo}</strong> — Precio base: $${precio.toFixed(2)} | Con 10% off: <strong>$${precioFinal}</strong>`;
    }
}

if (btnCotizar) {
    btnCotizar.addEventListener("click", mostrarCotizacion);
}