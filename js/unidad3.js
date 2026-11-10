// ===== 3.3 Catálogo dinámico =====
const productos = [
    { nombre: "Camiseta", precio: 70000 },
    { nombre: "Buso", precio: 120000 },
    { nombre: "Gorra", precio: 35000 }
];

const catalogo = document.getElementById("catalogo");

function mostrarProductos() {
    catalogo.innerHTML = "";   // limpia el contenedor para no duplicar tarjetas

    productos.forEach(function(producto) {
        const tarjeta = document.createElement("div");

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = "Precio: $" + producto.precio;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        catalogo.appendChild(tarjeta);
    });
}

mostrarProductos();

// ===== 3.4 Buscador =====
const nombres = ["Camiseta", "Buso", "Gorra", "Pantalón", "Chaqueta"];
const campoBuscar = document.getElementById("buscar");
const resultados = document.getElementById("resultados");

campoBuscar.addEventListener("input", function() {
    const texto = campoBuscar.value.toLowerCase();

    const encontrados = nombres.filter(function(nombre) {
        return nombre.toLowerCase().includes(texto);
    });

    resultados.innerHTML = "";

    encontrados.forEach(function(nombre) {
        const elemento = document.createElement("p");
        elemento.textContent = nombre;
        resultados.appendChild(elemento);
    });
});

// ===== 3.5 Formulario =====
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();   // evita que la página se recargue

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const respuesta = document.getElementById("respuesta");

    if (nombre === "" || correo === "") {
        respuesta.textContent = "Todos los campos son obligatorios";
        return;   // sale de la función, no sigue
    }

    respuesta.textContent = "Formulario validado correctamente";
    formulario.reset();   // limpia los campos
});