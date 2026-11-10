// ===== 2.2 Variables =====
let nombre = "Carlos";
let edad = 18;
const institucion = "Centro de Formación";

console.log(nombre);
console.log(edad);
console.log(institucion);

// Ejercicio 2.2
let nombreProducto = "Camiseta";
let precioProducto = 75000;
let disponible = true;

console.log(nombreProducto);
console.log(precioProducto);
console.log(disponible);

// ===== 2.3 Tipos de datos =====
let nombreTipo = "Camiseta";                         // String
let precioTipo = 75000;                              // Number
let disponibleTipo = true;                           // Boolean
let categorias = ["Ropa", "Accesorios"];             // Array
let productoTipo = { nombre: "Buso", precio: 120000 }; // Object
let observacion = null;                              // Null

// ===== 2.4 Operadores =====
let precioUnitario = 50000;
let cantidad = 3;
let descuento = 10000;

let subtotal = precioUnitario * cantidad;
let total = subtotal - descuento;

console.log(subtotal); // 150000
console.log(total);    // 140000

// ===== 2.5 Condicionales =====
let edadPersona = 20;

if (edadPersona >= 18) {
    console.log("Puede ingresar");
} else {
    console.log("No puede ingresar");
}

// Ejercicio 2.5
let stock = 5;

if (stock > 0) {
    console.log("Disponible");
} else {
    console.log("Agotado");
}

// ===== 2.6 Funciones =====
function saludar() {
    alert("Bienvenidos a nuestra página");
}
// saludar();  // Quita las // para probarla (abre una ventana al cargar)

function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

let resultado = calcularTotal(25000, 3);
console.log(resultado); // 75000

// ===== 2.7 Arreglos =====
const productos = ["Camiseta", "Pantalón", "Buso", "Gorra"];

console.log(productos[0]); // Camiseta

productos.forEach(function(producto) {
    console.log(producto);
});

// ===== 2.8 Objetos =====
const productoObjeto = {
    nombre: "Camiseta",
    precio: 70000,
    categoria: "Ropa",
    disponible: true
};

console.log(productoObjeto.nombre);
console.log(productoObjeto.precio);

// ===== 2.9 Eventos + 2.10 DOM =====
const boton = document.getElementById("btnCambiar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
    mensaje.textContent = "Ya estoy utilizando JavaScript";
    mensaje.style.color = "blue";
});

// ===== 2.11 LocalStorage y JSON =====
localStorage.setItem("usuario", "Carlos");
let nombreGuardado = localStorage.getItem("usuario");
console.log(nombreGuardado);

const carrito = [{ nombre: "Camiseta", cantidad: 2 }];
localStorage.setItem("carrito", JSON.stringify(carrito));

const carritoRecuperado = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carritoRecuperado);