const titulo = document.getElementById("titulo-tienda");
const mensaje = document.getElementById("mensaje-dom");

if (titulo) {
    titulo.textContent = "Coraquilla Mobile Store — Quito";
}

if (mensaje) {
    mensaje.innerHTML = 'DOM listo: catálogo de smartphones y envíos a todo el país. <span class="estado-activo">En línea</span>';
}