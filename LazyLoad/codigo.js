'use strict';

const publicaciones = document.querySelector('.publicaciones');
let contador=0;
const createPublicationCode = (name, content)=>{
    const container = document.createElement('DIV');
    const comentarios = document.createElement('DIV');
    const nombre = document.createElement('H3');
    const contenido = document.createElement('p');
    const btnComentario = document.createElement('INPUT');
    const btnEnviar = document.createElement('INPUT');
    
    container.classList.add('publicacion');
    comentarios.classList.add('comentarios');    
    btnEnviar.classList.add('enviar');
    btnEnviar.type='submit';
    btnComentario.classList.add('comentario');
    btnComentario.placeholder= "Escribe un comentario";
    nombre.textContent= name;
    contenido.textContent=content;
    
    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);
    
    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);
    
    return container;
}

/*let content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum voluptatem quam pariatur in reprehenderit ipsa, voluptatibus distinctio veniam inventore id perferendis necessitatibus nobis adipisci voluptates voluptatum eveniet ipsam nostru. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum voluptatem quam pariatur in reprehenderit ipsa, voluptatibus distinctio veniam inventore id perferendis necessitatibus nobis adipisci voluptates voluptatum eveniet ipsam nostrum.`;

publicaciones.appendChild(createPublicationCode("Pepito Grillo", content))
*/

const cargarPublicaciones = async num =>{
    const request = await fetch('informacion.txt')
    const content = await request.json();
    const arr = content.content;
   // console.log(arr)
   const documentFragment = document.createDocumentFragment();
   for(let i =0; i < num; i++){
    const newPublicacion = createPublicationCode(arr[contador].nombre, arr[contador].contenido);
    documentFragment.appendChild(newPublicacion);
    contador++;
   }
   publicaciones.appendChild(documentFragment)
}

cargarPublicaciones(2);