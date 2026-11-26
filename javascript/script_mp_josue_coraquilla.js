const carritoMovil = [
    { item: "iPhone 16 Pro 256GB", precio: 1150 },
    { item: "Cargador Rápido Original 45W", precio: 35 }
];

const totalCarrito = carritoMovil.reduce((acc, prod) => acc + prod.precio, 0);
console.log(`Total en carrito: $${totalCarrito}`);

const salida = document.getElementById("salida-script");
if (salida) {
    salida.innerHTML = `<p>Productos en carrito: <strong>${carritoMovil.length}</strong> | Total estimado: <strong>$${totalCarrito}</strong></p>`;
}