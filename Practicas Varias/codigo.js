'use strict'

const objeto = {
    nombre : "lucas",
    saludar : function(){console.log(`Hola ${this.nombre}`);}
}

objeto.saludar()

function constructorPersona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const persona =  new constructorPersona("Juan", "Jose")

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);

console.log(this);//Devuelve el objeto window

//let miNombre = "AAAAA";

const saludar = function(){
    console.log(`Hola ${this.miNombre}`);
}

const objetivo = {
    miNombre: "Luis",
    saludar
}

objetivo.saludar();