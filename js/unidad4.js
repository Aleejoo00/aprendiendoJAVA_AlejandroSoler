// ===== Datos =====
const productos = [
    { id: 1, nombre: "Camiseta", precio: 70000 },
    { id: 2, nombre: "Buso", precio: 120000 },
    { id: 3, nombre: "Gorra", precio: 35000 }
];

// Si hay un carrito guardado lo recupera; si no, empieza vacío
let carrito = JSON.parse(localStorage.getItem("carritoTienda")) || [];

function guardarCarrito() {
    localStorage.setItem("carritoTienda", JSON.stringify(carrito));
}

// ===== Función auxiliar para crear botones =====
function crearBoton(texto, accion) {
    const boton = document.createElement("button");
    boton.textContent = texto;
    boton.addEventListener("click", accion);
    return boton;
}

// ===== Mostrar catálogo =====
function mostrarProductos() {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    productos.forEach(function(producto) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = "$" + producto.precio;

        const boton = crearBoton("Agregar", function() {
            agregarProducto(producto.id);
        });

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);
        contenedor.appendChild(tarjeta);
    });
}

// ===== Agregar, cambiar cantidad y eliminar =====
function agregarProducto(id) {
    const producto = productos.find(function(item) {
        return item.id === id;
    });

    const existente = carrito.find(function(item) {
        return item.id === id;
    });

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    guardarCarrito();
    mostrarCarrito();
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(function(p) {
        return p.id === id;
    });

    if (!item) return;

    item.cantidad += cambio;

    if (item.cantidad < 1) {
        item.cantidad = 1;
    }

    guardarCarrito();
    mostrarCarrito();
}

function eliminarProducto(id) {
    carrito = carrito.filter(function(p) {
        return p.id !== id;
    });

    guardarCarrito();
    mostrarCarrito();
}

// ===== Mostrar carrito, total y descuento =====
function mostrarCarrito() {
    const contenedor = document.getElementById("carrito");
    const detalle = document.getElementById("detalleDescuento");
    const totalTexto = document.getElementById("total");

    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        const vacio = document.createElement("p");
        vacio.textContent = "El carrito está vacío";
        contenedor.appendChild(vacio);
        detalle.textContent = "";
        totalTexto.textContent = "Total: $0";
        return;
    }

    let subtotal = 0;

    carrito.forEach(function(producto) {
        const subtotalLinea = producto.precio * producto.cantidad;
        subtotal += subtotalLinea;

        const linea = document.createElement("div");

        const texto = document.createElement("span");
        texto.textContent =
            producto.nombre + " | Cantidad: " + producto.cantidad +
            " | Subtotal: $" + subtotalLinea + " ";

        linea.appendChild(texto);
        linea.appendChild(crearBoton("-", function() {
            cambiarCantidad(producto.id, -1);
        }));
        linea.appendChild(crearBoton("+", function() {
            cambiarCantidad(producto.id, 1);
        }));
        linea.appendChild(crearBoton("Eliminar", function() {
            eliminarProducto(producto.id);
        }));

        contenedor.appendChild(linea);
    });

    let descuento = 0;

    if (subtotal >= 200000) {
        descuento = subtotal * 0.10;
        detalle.textContent = "Descuento del 10% aplicado: -$" + descuento;
    } else {
        detalle.textContent = "Compra $200000 o más y obtén 10% de descuento";
    }

    totalTexto.textContent = "Total: $" + (subtotal - descuento);
}

// ===== Arrancar =====
mostrarProductos();
mostrarCarrito();