const badgeEquipo = document.getElementById("badge-equipo");
const btnReservar = document.getElementById("btn-reservar");
const infoAtributos = document.getElementById("info-atributos");

function refrescarInfoAtributos() {
    if (!badgeEquipo || !infoAtributos) return;
    const estado = badgeEquipo.getAttribute("data-estado");
    const titulo = badgeEquipo.getAttribute("title");
    infoAtributos.textContent = `Atributo data-estado: "${estado}" | title: "${titulo}"`;
}

refrescarInfoAtributos();

if (btnReservar && badgeEquipo) {
    btnReservar.addEventListener("click", () => {
        badgeEquipo.setAttribute("data-estado", "reservado");
        badgeEquipo.setAttribute("title", "Equipo apartado por cliente");
        badgeEquipo.textContent = "Samsung Galaxy S25 Ultra — Reservado";
        refrescarInfoAtributos();
    });
}