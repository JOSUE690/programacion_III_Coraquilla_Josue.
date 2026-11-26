const configuracionCatalogo = {
    sucursal: "Quito Matriz",
    moneda: "USD",
    envioNacional: "Servientrega",
    activo: true
};

console.info("Configuración de catálogo cargada:", configuracionCatalogo);
const logElem = document.getElementById("log-servidor");
if (logElem) {
    logElem.textContent = `Catálogo sincronizado (${configuracionCatalogo.sucursal}) — Envíos por ${configuracionCatalogo.envioNacional}.`;
}