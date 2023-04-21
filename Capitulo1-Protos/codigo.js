"strict mode";

/*** Modo Sin Clausulas 
const   cambiarTamano = tamano =>{
    document.querySelector('.texto').style.fontSize =  `${tamano}px`;
}

document.querySelector('.t12').addEventListener('click', ()=>cambiarTamano(12));
document.querySelector('.t14').addEventListener('click', ()=>cambiarTamano(14));
document.querySelector('.t16').addEventListener('click', ()=>cambiarTamano(16));
*/

/**** Modo con Cláusulas *****/
const   cambiarTamano = tamano =>{
  return () => { 
        document.querySelector('.texto').style.fontSize =  `${tamano}px`; 
    }
}

px12 = cambiarTamano(12)
px14 = cambiarTamano(14)
px16 = cambiarTamano(16)

document.querySelector('.t12').addEventListener('click', px12);
document.querySelector('.t14').addEventListener('click', px14);
document.querySelector('.t16').addEventListener('click', px16);