// Guía de ejercicios
// 1. Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
// usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
// que es. *
// 2. Dado dos números ingresados por el usuario, se pide realizar una función que
// devuelve la resta de ambos números. Mostrar el resultado por la consola.
// 3. Generar una función que le ingresen por parámetro dos valores distintos en dos
// variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
// Pasarlo a a y mostrarlos.
// 4. Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
// calcular su perímetro, su superficie, e informar los mismos en consola.
// 5. Generar una función que dada una temperatura en grados fahrenheit los convierta a
// grados celsius.
// 6. Realizar una función que calcule el factorial de un número ingresado por el usuario (el
// número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
// consola.
// 7. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
// indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos”.
// 8. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
// lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
// Javascript.
// 9. Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
// calificación resultante según la nota ingresada:
// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 1
// Clase 3- “Introducción a la Programación Web”
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente
// 10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
// devuelve si ese mes tiene 30 o 31 días.
// 11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
// número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……
// 12. Generar una función donde ingresen dos números, el primero corresponde a la
// cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
// colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
// disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.
// 13. Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
// Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
// Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
// través de su código y el script saca el descuento correspondiente por la consola.
// * En javascript tenemos “prompt(“Mensaje a mostrar”)” que nos permite que el usuario
// ingrese algún valor para poder usarlo en nuestro código.
// Más información en: https://www.w3schools.com/jsreF/met_win_prompt.asp
// ** Recuerden que para mostrar en consola tenemos la sentencia “console.log(“Hola ” +
// “mundo”)”. y que el operador “+” nos permite concatenar strings



//-------------ejercicio 1-------
// let valor1 = prompt("Ingrese Valor 1")
// const tipoDato = (valor1) => {
//     console.log(typeof (valor1))
// }
// tipoDato(valor1);

//-------------Ejercicio 2-------

// let valor1 = prompt("Ingrese Valor 1")
// let valor2 = prompt("Ingrese Valor 2")

// const resta = (valor1, valor2) => {
//     console.log(valor1 - valor2)
// }
// resta(valor1, valor2)

//-------------Ejercicio 3-------

// let valor1 = prompt("Ingrese Valor 1")
// let valor2 = prompt("Ingrese Valor 2")
// const cambiarValorDeVariables=(valor1,valor2)=>{
//     let aux;
//     aux=valor1;
//     valor1=valor2;
//     valor2=aux;
//     console.log("Valor 1:",valor1,"Valor 2:",valor2)
// }
// cambiarValorDeVariables(valor1,valor2)

//-------------Ejercicio 4-------

// let lado = prompt("Ingrese lado del cuadrado")
// const superficiePerimetroCuadrado=(lado)=>{
//     console.log("Superficie del Cuadrado:",lado*lado,"- Perimetro del Cuadrado:",4*lado)
// }
// superficiePerimetroCuadrado(lado)

//-------------Ejercicio 5-------

// let valorFahrenheit = prompt("Ingrese un Valor en Fahrenheit")
// const FahrenheitCelsius=(valorFahrenheit)=>{
//     console.log("La Conversion de "+valorFahrenheit+"°F a Celsius : "+((valorFahrenheit-32)/1.8)+"°C")
// }
// FahrenheitCelsius(valorFahrenheit)

//-------------Ejercicio 6-------

// let valor1 = prompt("Ingrese un Valor en Fahrenheit")
// while (valor1 < 11) {
//     alert("Ingrese un valor Mayor a 10")
//     valor1 = prompt("Ingrese un Valor en Fahrenheit")
// }

// let aux = valor1;
// const nFactorial = valor1
// const factorial = (valor1) => {

//     while (valor1 > 0) {
//         valor1 = valor1 - 1
//         if (valor1 === 0) {
//             console.log("El Factorial de " + nFactorial + "! " + "es " + aux)
//         }
//         aux = aux * valor1
//         factorial(valor1)
//         return aux
//     }
// }
// factorial(valor1)

//-------------Ejercicio 7-------


// const esPalindroma = (palindromoEditado) => {
//     console.info(palindromo.length)
//     palindromoEditado = palindromo.split(" ").join("").toLocaleLowerCase();
//     palindromoEditado = palindromoEditado.replace(/á/gi, "a");
//     palindromoEditado = palindromoEditado.replace(/é/gi, "e");
//     palindromoEditado = palindromoEditado.replace(/í/gi, "i");
//     palindromoEditado = palindromoEditado.replace(/ó/gi, "o");
//     palindromoEditado = palindromoEditado.replace(/ú/gi, "u");
//     console.log(palindromoEditado);
//     let j = palindromoEditado.length - 1
//     let contador = 0
//     for (i = 0; i < palindromoEditado.length; i++) {
//         console.log(palindromoEditado[i] + "--" + palindromoEditado[j])
//         if (palindromoEditado[i] === palindromoEditado[j]) {
//             contador++
//             console.log("es", contador)

//         }
//         j--

//     }

//     if (palindromoEditado.length === contador) {
//         console.log("La cadena " +'"'+ palindromo + '"'+" ES PALINDROMA")
//     } else {
//         console.log("La cadena " +'"'+ palindromo + '"'+" NO ES PALINDROMA")
//     }
// }

// let palindromo = prompt("Ingrese un Palabra o Frase Palindroma")
// esPalindroma(palindromo);



//-------------Ejercicio 8-------


// let cadena = prompt("Ingrese un Cadena de Caracteres")

// const MayusculasMinusculas = (cadena) => {
//     let mayuscula=cadena.toUpperCase()
//     let minuscula=cadena.toLowerCase()
//     console.log("Cadena en Mayuscula: "+mayuscula+" Cadena en Minuscula: "+minuscula)
// }
// MayusculasMinusculas(cadena)


//-------------Ejercicio 9-------

// let nota = prompt("Ingrese Nota de Alumno del 0 al 10");

// while(!(nota>=0 && nota<=10)){
//     alert("La nota debe estar entre 0 y 10");
//     nota = prompt("Ingrese Nota de Alumno del 0 al 10");
// }

// calcularNota=(nota)=>{
//     if(nota>=0 && nota<=3){
//         console.log("Muy deficiente");
//     }else if(nota>3 && nota<=5){
//         console.log("Insuficiente");
//     }else if(nota>5 && nota<=6){
//         console.log("Suficiente");
//     }else if(nota>6 && nota<=7){
//         console.log("Bien");
//     }else if(nota>7 && nota<=9){
//         console.log("Notable");
//     }else if(nota>9 && nota<=10){
//         console.log("Sobresaliente");
//     }

// }

// calcularNota(nota);

// //-------------Ejercicio 10-------

// let numeroMes = prompt("Ingrese Numero del Mes del 0 al 12");

// while(!(numeroMes>=1 && numeroMes<=12)){
//     alert("El numero del mes debe estar entre 0 y 12");
//     numeroMes= prompt("Ingrese Numero del Mes del 0 al 12");
// }

// calcularMes=(numeroMes)=>{
//     if(numeroMes===4 ||numeroMes===6 ||numeroMes===9 ||numeroMes===11 ){
//         console.log("Mes de 30 dias");
//     }else if(numeroMes===1 ||numeroMes===3 ||numeroMes===5 ||numeroMes===7||numeroMes===8 ||numeroMes===10 ||numeroMes===12){
//         console.log("Mes de 31");
//     }else {
//         console.log("Mes de 28 dias");
//     }

// }

// calcularMes(parseInt(numeroMes));


//-------------Ejercicio 11-------

// let valorPiramide = prompt("Ingrese un Numero entre 0 y 10");

// while(!(valorPiramide>=1 && valorPiramide<=10)){
//     alert("El numero del mes debe estar entre 0 y 10");
//     valorPiramide= prompt("Ingrese un Numero entre 0 y 10");
// }

// calcularPiramide=(valorPiramide)=>{
//     let acumulador=""
//     for(i=1;i<=valorPiramide;i++){
//         acumulador=acumulador+i
//         console.log(acumulador)
        
//     }  
// }

// calcularPiramide(valorPiramide);


// //-------------Ejercicio 12-------

// let cantidadBultos = prompt("Ingrese un numero de bultos");
// let bultosPorCaja = prompt("Ingrese numero de bultos por caja");

// calcularCajas=(cantidadBultos,bultosPorCaja)=>{
//     console.log("cantidad de cajas: "+parseInt(cantidadBultos/bultosPorCaja))
//     console.log("cantidad de bultos sueltos: "+(cantidadBultos%bultosPorCaja))
   
// }

// calcularCajas(cantidadBultos,bultosPorCaja);



// //-------------Ejercicio 13-------



let codigoAuto = prompt("Ingrese Codigo del Auto");

calcularDescuentoAuto=(codigoAuto)=>{
    if(codigoAuto==="focus"){
        console.log("Descuento del 5%");
    }else if(codigoAuto==="fiesta"){
        console.log("Descuento del 10%");
    }else {
        console.log("Codigo Ingresado Incorrecto");
    }

}

calcularDescuentoAuto(codigoAuto);