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
3. Urea Perlada`);

switch (quimic) {
  case "Ansul 30":
    console.log(`Pedido: ${quimic}, valor $1200`);
    break;
  case "Nitro C":
    console.log(`Pedido: ${quimic}, valor $900`);
    break;
  case "Urea Perlada":
    console.log(`Pedido: ${quimic}, valor $800`);
    break;
  default:
    console.log("Lo sentimos, no has seleccionado ningún producto");
    break;
}


