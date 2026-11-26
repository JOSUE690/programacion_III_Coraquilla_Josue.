const itemsEquipo = document.querySelectorAll("#catalogo-equipos .equipo-item");
const resumen = document.getElementById("resumen-seleccion");

itemsEquipo.forEach((item, index) => {
    item.style.padding = "4px 0";
    if (index === 0) {
        item.style.fontWeight = "bold";
    }
});

if (resumen) {
    resumen.textContent = `Se seleccionaron ${itemsEquipo.length} equipos en el catálogo principal.`;
}