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