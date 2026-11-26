const marca = "Apple";                 // string
const capacidadGB = 256;               // number
const precioUSD = 999.99;              // number
const esHomologadoARCOTEL = true;      // boolean
let descuentoAplicado = null;          // null
let codigoPromocion;                   // undefined

const datos = [
    `marca (${typeof marca}): ${marca}`,
    `capacidadGB (${typeof capacidadGB}): ${capacidadGB} GB`,
    `precioUSD (${typeof precioUSD}): $${precioUSD}`,
    `esHomologadoARCOTEL (${typeof esHomologadoARCOTEL}): ${esHomologadoARCOTEL}`,
    `descuentoAplicado (${typeof descuentoAplicado}): ${descuentoAplicado}`,
    `codigoPromocion (${typeof codigoPromocion}): ${codigoPromocion}`
];

const lista = document.getElementById("lista-tipos");
if (lista) {
    lista.innerHTML = datos.map(item => `<li>${item}</li>`).join("");
}