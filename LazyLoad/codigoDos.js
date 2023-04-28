//'use strict'
const miBoton= document.querySelector('.miboton')


const creaContent = (title, contente) =>{
        const divExperimento = document.querySelector('.experimento')
        
        const documentFragment = document.createDocumentFragment();
        const primerDiv = document.createElement('DIV');
        const segundoDiv = document.createElement('DIV');
        const parrafo= document.createElement('p');
        const titulo = document.createElement('H3');
        
        primerDiv.classList.add('primerDiv');
        segundoDiv.classList.add('segundoDiv');
        parrafo.classList.add('parrafo');
        titulo.classList.add('titulo');
        titulo.textContent = title;
        parrafo.textContent = contente;
        primerDiv.appendChild(segundoDiv);
        segundoDiv.appendChild(titulo);
        segundoDiv.appendChild(parrafo);
        documentFragment.appendChild(primerDiv);
        divExperimento.appendChild(documentFragment);
}
let i =0;
const duplica = ()=>{
     i=i+1;
     var  titulotextContent = i +  " Este es el título" ;
     if(i%2 == 0){
     
         titulotextContent = i +  " Este es el título " + i;
     }
     const parrafotextContent = i +  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum voluptatem quam pariatur in reprehenderit ipsa, voluptatibus distinctio veniam inventore id perferendis necessitatibus nobis adipisci voluptates voluptatum eveniet ipsam nostru. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum voluptatem quam pariatur in reprehenderit ipsa, voluptatibus distinctio veniam inventore id perferendis necessitatibus nobis adipisci voluptates voluptatum eveniet ipsam nostrum."
   creaContent(titulotextContent,  parrafotextContent);
}
// documentFragment.appendChild(primerDiv);
// divExperimento.appendChild(documentFragment)

miBoton.addEventListener('click', (e)=>{
    console.log('Clickado');
    duplica();
})