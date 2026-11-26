const inputModelo = document.getElementById("entrada-modelo");
const btnActualizar = document.getElementById("btn-actualizar");
const vistaPrevia = document.getElementById("vista-previa");

function renderizarModelo(modeloTexto) {
    const limpio = modeloTexto.trim() || "Samsung Galaxy S25";
    if (vistaPrevia) {
        vistaPrevia.innerHTML = `<p>Equipo en vitrina: <strong>${limpio}</strong> — Garantía 12 meses</p>`;
    }
}

renderizarModelo("Samsung Galaxy S25");

if (btnActualizar && inputModelo) {
    btnActualizar.addEventListener("click", () => {
        renderizarModelo(inputModelo.value);
    });
}