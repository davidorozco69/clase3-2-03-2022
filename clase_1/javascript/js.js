let btnEj1 = document.getElementById('Ejercicio1')
let btnEj2 = document.getElementById('Ejercicio2')
let btnEj3 = document.getElementById('Ejercicio3')
let btnEj4 = document.getElementById('Ejercicio4')
let Resultado1 = document.getElementById('ResEj1')
let num1
let num2
let num3
let num4
let num5
let resultado_Parciales
let resultado_Examen
let resultado_Trabajo
let producto
let suma
let media
let Nota = false
let Calculos = false
let Convertir = false
let añadir = false


function imprimirMensaje(){
    console.log("funcion sin retorno cosas")

}
imprimirMensaje();
function calcularPromedio(num1, num2, num3){
    let promedio = (num1+num2+num3)/3;
    return `El promedio es:  ${promedio}`;

}
console.log(calcularPromedio(35,70,2));

import { Suma} from './Suma.js'
console.log(Suma(5,4))

import { multiplicacion} from './multiplicacion.js'
console.log(multiplicacion(10,10))

import { Resta} from './resta.js'
console.log(Resta(17,3))

import { Division} from './division.js'
import { Conversor } from './Conversor.js'
console.log(Division(50,2))



function LeerDatos(){
    if (Convertir == true){
        num1 = Number(prompt('ingrese Número 1'));
    }
    else if(añadir == true){
        num1 = Number(prompt('ingrese Número 1'));
        num2 = Number(prompt('ingrese Número 2'));
    }

    else if(Nota == true){
        num1 = Number(prompt('ingrese Número 1'));
        num2 = Number(prompt('ingrese Número 2'));
        num3 = Number(prompt('ingrese Número 3'));
        num4 = Number(prompt('ingrese Número 4'));
        num5 = Number(prompt('ingrese Número 5'));
    }
    else if(Calculos == true){
        num1 = Number(prompt('ingrese Número 1'));
        num2 = Number(prompt('ingrese Número 2'));
        num3 = Number(prompt('ingrese Número 3'));
        num4 = Number(prompt('ingrese Número 4'));
    }
    
}

btnEj1.addEventListener('click', () => {
    Convertir = false
    Nota = false
    Calculos = false
    añadir = true
    LeerDatos()
    Resultado1.innerHTML = `la suma es ${Suma(num1, num2)}`
})

btnEj2.addEventListener('click', () => {
    Convertir = false
    Nota = true
    Calculos = false
    añadir = false
    LeerDatos()
    resultado_Parciales = ((num1 * 0.183333333) + (num2*0.183333333) + (num3*0.183333333))
    resultado_Examen = (multiplicacion(num4, 0.30))
    resultado_Trabajo = (multiplicacion(num5, 0.15))
    Resultado1.innerHTML = `La nota final es ${(Math.round(resultado_Examen + resultado_Parciales + resultado_Trabajo))}`
})

btnEj3.addEventListener('click', () => {
    Convertir = false
    Nota = false
    Calculos = true
    añadir = false
    LeerDatos()
    producto = (num1 * num2 * num3 * num4)
    suma = (num1 + num2 + num3 + num4)
    media = (suma / 4)
    Resultado1.innerHTML = "El producto es: " + producto + "<br/>La suma es: " + suma + "<br/>La media aritmetica es: " + media
})

btnEj4.addEventListener('click', () => {
    Convertir = true
    Nota = false
    Calculos = false
    añadir = false
    LeerDatos()
    console.log(`La conversion de F° a C° es: ${Math.round(Conversor(num1))}`)
    Resultado1.innerHTML = `La conversion de F° a C° es: ${Math.round(Conversor(num1))} °C`
})