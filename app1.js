//Ingresando al area de compra

let usuario = prompt("Ingrese nombre de usuario");
let contraseña = Number(prompt("Ingrese contraseña"));

const usuarioCorrecto = "Aitor";
const contrasenaCorrecta = 12345;

if (usuario == usuarioCorrecto && contrasenaCorrecta) {
    alert("Datos correctos, Bienvenido!");
    console.log("Datos correctos, usuario logeado");
} else {
    alert("Lo sentimos, datos incorrectos no puedes acceder");
    console.log("Datos incorrectos, vuelve a intentar");
}

//Solicitando compra

let quimic = prompt(`Elija los productos que desea comprar:
1. Ansul 30
2. Nitro C
3. Urea Perlada
4. Urea Granulada`);

switch (quimic) {
  case "Ansul 30":
    console.log(`Pedido: ${quimic}, valor $11200`);
    break;
  case "Nitro C":
    console.log(`Pedido: ${quimic}, valor $11900`);
    break;
  case "Urea Perlada":
    console.log(`Pedido: ${quimic}, valor $11800`);
  case "Urea Granulada":
    console.log(`Pedido: ${quimic}, valor $11100`);
    break;
  default:
    console.log("Lo sentimos, no has seleccionado ningún producto");
    break;
}

function producto(id, nombre, precio, inventario){
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.inventario = inventario
  this.mostrarStock = function () {
    alert(`Tenemos ${this.inventario} unidades disponibles.`)
  }
  this.agregarStock = function (cantidad) {
    this.inventario+- cantidad
    alert(`Has agregado ${cantidad} ${this.nombre} al inventario.`)
  }
}

let productos = [
  new Producto(1, 'Ansul 30', 11200, 10),
  new Producto(2, 'Nitro C', 11900, 10),
  new Producto(3, 'Urea Perlada', 11800, 5),
  new Producto(4, 'Urea Granulada', 11100, 5),
]

let carrito = []

function addToCart(id, cant) {
  let producto = productos.find(product => producto.id===id)
  producto.cantidad = cant 
  producto.total = producto.precio * cant
  carrito.push(producto)
}

addToCart(3, 2)

console.log(carrito)