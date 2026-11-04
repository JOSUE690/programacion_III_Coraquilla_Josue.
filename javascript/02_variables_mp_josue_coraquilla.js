const tienda = "Coraquilla Mobile Store";
let modeloEquipo = "Samsung Galaxy S25 Ultra";
let precioUnitario = 1180;
let stockDisponible = 6;

const contenedor = document.getElementById("salida-variables");
if (contenedor) {
    contenedor.innerHTML = `
        <p><strong>Tienda:</strong> ${tienda}</p>
        <p><strong>Modelo:</strong> ${modeloEquipo}</p>
        <p><strong>Precio:</strong> $${precioUnitario}</p>
        <p><strong>Stock:</strong> ${stockDisponible} unidades</p>
    `;
}