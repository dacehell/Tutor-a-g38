// var nombre = "David ";
// var apellido = "Caldera";

// var number = 60;
// var number2 = 2;
// var string = "hola";
// var bolean = true;

// console.log(nombre + apellido);

// console.log(number % number2);
// console.log(string);
// console.log(bolean);

//ejercicio 2

var num1 = parseInt(prompt("Ingrese el primer numero mayor a cero"));
var num2 = parseInt(prompt("ingrese el segundo numero mayor a cero"));
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;

document.write(`

    <p style="font-size:20px">La suma de ambos numeros es ${suma}  </p>
    <p style="font-size:20px">La resta de ambos numeros es ${resta}  </p>
    <p style="font-size:20px">La multiplicacion de ambos numeros es ${multiplicacion}  </p>
    <p style="font-size:20px">La division de ambos numeros es ${division}  </p>
    <p style="font-size:20px">el modulo de ambos numeros es ${modulo}  </p>

`);
// transformar grados celsius

var celsius = parseInt(
  prompt("Ingrese la temperatura actual en grados celsius")
);
var resultFahrenheit = (celsius * 9) / 5 + 32;
var resultKelvin = celsius + 273.15;

document.write(`

   <p style="font-size:20px; color: blue">La temperatura en grados Fahrenheit es ${resultFahrenheit}</p>
   <p style="font-size:20px; color: blue">La temperatura en grados Kelvin es ${resultKelvin}</p>

`);

// obtener años semanas y dias

var totalDias = parseInt(prompt("Ingrese la cantidad de días"));
var year = Math.floor(totalDias / 365);
var weeks = Math.floor((totalDias % 365) / 7);
var days = Math.floor(totalDias);

document.write(`<h2>${year} años, ${weeks} semanas, ${days} dias</h2>`);

var num3 = parseInt(prompt("ingrese otro numero"));

var promedio = num1 + num2 + num3;

document.write(`<h3>El promedio es ${promedio / 3}</h3>`);
