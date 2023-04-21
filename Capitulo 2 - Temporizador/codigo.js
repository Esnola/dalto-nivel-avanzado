"strict mode";

const reloj = document.querySelector('.reloj');
const hora = document.querySelector('.hora');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const ponCero = num =>{
   if (num.toString().length < 2 )  return "0".concat(num);
   return num;
}

function actualizaDatos() {
    let datos = new Date();
    let horas = ponCero(datos.getHours());
    let mins = ponCero(datos.getMinutes());
    let secs = ponCero(datos.getSeconds());
    
    hora.innerHTML = horas;
    min.innerHTML = mins;
    sec.innerHTML = secs;
    //console.log(datos.getSeconds());
}

actualizaDatos();
setInterval(actualizaDatos, 1000)

