const modelosDisponibles = [
    "iPhone 16 Pro",
    "Samsung Galaxy S25",
    "Xiaomi Redmi Note 14 Pro",
    "Motorola Edge 50"
];

modelosDisponibles.push("Google Pixel 9");
const primerModelo = modelosDisponibles[0];
const totalModelos = modelosDisponibles.length;

console.log("Modelos:", modelosDisponibles);
const salida = document.getElementById("salida-arreglos");
if (salida) {
    salida.innerHTML = `
        <p><strong>Total de modelos:</strong> ${totalModelos}</p>
        <p><strong>Primer modelo:</strong> ${primerModelo}</p>
        <p><strong>Lista completa:</strong> ${modelosDisponibles.join(" • ")}</p>
  13_iterar_arreglos_mp_josue_coraquilla.html  `;
}