"use strict";
// const circulo = document.querySelector('.circulo');
// const rectangulo = document.querySelector('.rectangulo');
// // let n=0
// // circulo.addEventListener('click', ()=> console.log(n++))

// // circulo.addEventListener("dragstart", ()=>console.log(1));
// // circulo.addEventListener("drag", ()=>console.log(2));
// // circulo.addEventListener("dragend", ()=>alert("Soltado"));

// rectangulo.addEventListener("dragenter",()=> console.log(1))
// rectangulo.addEventListener("dragover", (e)=>{
//     e.preventDefault();
//     console.log(2)}
// )
// rectangulo.addEventListener("drop",()=> console.log(3))
// rectangulo.addEventListener("dragleave",()=> console.log(4))

const zona = document.querySelector('.zona')
const textuDivs = document.querySelectorAll('.cont-Textura')

zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
});

zona.addEventListener('drop', (e)=>{
    let n = e.dataTransfer.getData("textura");
    if(n) zona.style.background = `url("textura${n}.jpeg")`;
})


//textuDivs.forEach((texturaDiv)=>{    
for(let i= 1; i < 4; i++){
    document.querySelector(`.textu${i}`).addEventListener('dragstart', (e)=>transferirTextura(i,e))
}

const transferirTextura = (n, e)=>{
    e.dataTransfer.setData('textura', n);
    console.log(n)
}