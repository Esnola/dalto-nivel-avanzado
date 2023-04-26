"use strict";
const modal = document.querySelector('.modal-overlay')
const definirIdioma = ()=>{
    document.querySelector('.en').addEventListener('click', ()=>{
        localStorage.setItem('idioma', "en");
        cerrarModal();
    })
    document.querySelector('.es').addEventListener('click', ()=>{
        localStorage.setItem('idioma', "es");
        cerrarModal();
    })
}
const cerrarModal = () =>{
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(()=>modal.style.display='none', 1000)
}

const idioma = localStorage.getItem("idioma");

const marcarNombre = ()=>{
    let nombre = localStorage.getItem('minombre');
      if(nombre === null){
        document.querySelector('.aditivo').style.display = "block"
        document.querySelector('.borrador').style.display= "none"
      }else{
        document.querySelector('.aditivo').style.display = "none"
        document.querySelector('.borrador').style.display= "block"
      }
      console.log(nombre);
}
marcarNombre();

document.querySelector('.aditivo').addEventListener('click',()=>{
    localStorage.setItem('minombre', document.querySelector('.aditivo').dataset.nombre)
    marcarNombre()
})

document.querySelector('.borrador').addEventListener('click',()=>{
    localStorage.removeItem('minombre')
    marcarNombre()
})


if( idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`);
    modal.style.display='none';
}