'use strict'
const geolocation = navigator.geolocation


const posicion = (pos)=>{
    console.log(pos);
}
geolocation.getCurrentPosition(posicion)