const smartphone = {
    marca: "Samsung",
    modelo: "Galaxy S25 Ultra",
    almacenamiento: "512GB",
    ram: "12GB",
    precio: 1180,
    disponible: true,
    resumen() {
        return `${this.marca} ${this.modelo} (${this.almacenamiento} / ${this.ram}) — $${this.precio}`;
    }
};

console.log(smartphone.resumen());
const salida = document.getElementById("salida-objetos");
if (salida) {
    salida.innerHTML = `
        <p><strong>Resumen:</strong> ${smartphone.resumen()}</p>
        <p><strong>Estado:</strong> ${smartphone.disponible ? "En stock" : "Agotado"}</p>
    `;
}