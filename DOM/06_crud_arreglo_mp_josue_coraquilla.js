let equiposCrud = [
    "iPhone 16 Pro",
    "Samsung Galaxy S25",
    "Xiaomi Redmi Note 14 Pro"
];

const inputNuevoEquipo = document.getElementById("nuevo-equipo");
const btnAgregar = document.getElementById("btn-agregar");
const btnEliminarUltimo = document.getElementById("btn-eliminar-ultimo");
const listaCrud = document.getElementById("lista-crud");

function renderizarCrud() {
    if (!listaCrud) return;
    listaCrud.innerHTML = "";

    equiposCrud.forEach((equipo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${equipo} `;

        const btnEditar = document.createElement("button");
        btnEditar.type = "button";
        btnEditar.textContent = "Renombrar";
        btnEditar.addEventListener("click", () => {
            equiposCrud[index] = `${equipo} (Promo)`;
            renderizarCrud();
        });

        const btnBorrar = document.createElement("button");
        btnBorrar.type = "button";
        btnBorrar.textContent = "Eliminar";
        btnBorrar.addEventListener("click", () => {
            equiposCrud = equiposCrud.filter((_, i) => i !== index);
            renderizarCrud();
        });

        li.appendChild(btnEditar);
        li.appendChild(btnBorrar);
        listaCrud.appendChild(li);
    });
}

renderizarCrud();

if (btnAgregar && inputNuevoEquipo) {
    btnAgregar.addEventListener("click", () => {
        const nombre = inputNuevoEquipo.value.trim();
        if (nombre) {
            equiposCrud.push(nombre);
            inputNuevoEquipo.value = "";
            renderizarCrud();
        }
    });
}

if (btnEliminarUltimo) {
    btnEliminarUltimo.addEventListener("click", () => {
        equiposCrud.pop();
        renderizarCrud();
    });
}