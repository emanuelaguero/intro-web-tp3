
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