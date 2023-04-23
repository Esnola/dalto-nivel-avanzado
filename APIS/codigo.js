'use strict'


const salida = document.querySelector('.salida')
const salida2 = document.querySelector('.salida2')
const salida3 = document.querySelector('.salida3')
const miDiv = document.createElement('mIDIV')
miDiv.classList.add('miDiv')
salida.appendChild(miDiv)

const fecha = new Date();
console.log(fecha.length)
miDiv.innerHTML += "<div>Dia del mes " + fecha.getDate() + "</div>"; 
miDiv.innerHTML += "<div>Dia semana " + fecha.getDay() + "</div>"; 
miDiv.innerHTML += "<div>Hora " + fecha.getHours() + "</div>"; 
miDiv.innerHTML += "<div>Minutos " + fecha.getMinutes() + "</div>"; 
miDiv.innerHTML += "<div>Segundos " + fecha.getSeconds() + "</div>"; 
miDiv.innerHTML += "<div>Mes " + (fecha.getMonth() + 1) + "</div>"; 
miDiv.innerHTML += "<div>Año " + fecha.getFullYear() + "</div>"; 
console.log(1000*60*24*360*53);