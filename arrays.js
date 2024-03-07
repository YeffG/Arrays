// Crear 4 arrays diferentes
let Enteros = [1, 2, 3, 4, 5];
let Paises = ["España", "Francia", "Italia", "Alemania"];
let IntFloat = [1.5, 2, 3, 4.9];
let Mixto = [1, "dos", 3, "cuatro", 5];

//acumular todos los valores de un arrays de enteros
console.log("Método Reduce:");
let sumaEnteros = Enteros.reduce((acumulador, valorActual) => acumulador + valorActual);
console.log("Array de enteros:", sumaEnteros);

//convierte los valores strings a mayusculas
console.log("\nMétodo Map:");
let arrayMayusculas = Paises.map((pais) => pais.toUpperCase());
console.log("Array de países:", arrayMayusculas);

//muestra en consola solo los valores con decimales
console.log("\nMétodo Filter:");
let valoresDecimales = IntFloat.filter((valor) => valor % 1 !== 0);
console.log(valoresDecimales);

//cambia a mayusculas las cadenas de caracteres si los hay
console.log("\nMétodo ForEach:");
Mixto.forEach((elemento, indice) => {
  if (typeof elemento === "string") {
    Mixto[indice] = elemento.toUpperCase();
  }
});
console.log("Array mixto modificado:", Mixto);
