function calcularPrecioFinal(precioBase, descuentoPorcentaje = 0) {
    const montoDescuento = precioBase * (descuentoPorcentaje / 100);
    return Number((precioBase - montoDescuento).toFixed(2));
}

const formatearFichaEquipo = (modelo, almacenamiento, precioFinal) => {
    return `Equipo: ${modelo} (${almacenamiento}) | Precio final: $${precioFinal}`;
};

const precioConPromo = calcularPrecioFinal(799, 12);
const ficha = formatearFichaEquipo("Google Pixel 9", "256GB", precioConPromo);

console.log(ficha);
const salida = document.getElementById("resultado-funciones");
if (salida) {
    salida.innerHTML = `<p>${ficha}</p>`;
}