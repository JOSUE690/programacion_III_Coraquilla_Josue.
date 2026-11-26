const equiposStock = [
    { modelo: "iPhone 15 128GB", precio: 849, cantidad: 3 },
    { modelo: "Galaxy A55 5G", precio: 395, cantidad: 5 },
    { modelo: "Poco X7 Pro", precio: 360, cantidad: 4 }
];

const lista = document.getElementById("lista-iterar");
const totalElem = document.getElementById("total-iterar");
let valorTotalStock = 0;

equiposStock.forEach((equipo, indice) => {
    const subtotal = equipo.precio * equipo.cantidad;
    valorTotalStock += subtotal;
    console.log(`${indice + 1}. ${equipo.modelo} (${equipo.cantidad} und.) -> $${subtotal}`);

    if (lista) {
        lista.innerHTML += `<li>${indice + 1}. <strong>${equipo.modelo}</strong> — ${equipo.cantidad} und. x $${equipo.precio} = <strong>$${subtotal}</strong></li>`;
    }
});

if (totalElem) {
    totalElem.innerHTML = `<strong>Valor total del inventario:</strong> $${valorTotalStock}`;
}