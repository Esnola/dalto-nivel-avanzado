'use strict'

const salida = document.querySelector('.salida')
const salida2 = document.querySelector('.salida2')
const salida3 = document.querySelector('.salida3')
const miDiv = document.createElement('mIDIV')
miDiv.classList.add('miDiv')
salida.appendChild(miDiv)


const sumar = (num1,num2)=>{
  console.log(num1 + num2)
    return (num1 + num2);
}
let arr=[3,4]

miDiv.innerHTML= sumar(...arr)