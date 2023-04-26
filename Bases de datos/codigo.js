'use strict';
const nombreBD = "miBaseDatos"

//Solicitud a la base de datos
 const IDBRequest = indexedDB.open(nombreBD,1);
 //console.log(IDBRequest)

IDBRequest.addEventListener("upgradeneeded", ()=>{
    console.log(`${nombreBD} se ha creado correctamente`)
    //Resultado de la solicitud
    const db = IDBRequest.result;
    db.createObjectStore("nombres", {
        autoIncrement: true
    })
})

 IDBRequest.addEventListener('success',()=>{
    console.log("Todo correcto")
 })
 
 IDBRequest.addEventListener('error',()=>{
    console.log("Algo está fallando")
 })
 
 const addObjeto = objeto =>{
    const losDatos =  escribeDatosBD("readwrite");
    losDatos[0].add(objeto);
    losDatos[1].addEventListener('complete', ()=>{
        console.log('Añadido correctamente');
    })
 }
 
  const leerObjetos = () =>{
   /* const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", "readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();*/
    const losDatos =  escribeDatosBD("readonly");
    const cursor = losDatos[0].openCursor()
    cursor.addEventListener("success", ()=>{
        if(cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        }else{
            console.log('Todos los datos fueron leidos');
        }
    })
  }
  
  const modificarObj = (key, objeto) =>{
    const losDatos =  escribeDatosBD("readwrite");
    losDatos[0].put(objeto, key);
    
    losDatos[1].addEventListener('complete', ()=>{
        console.log('Modificado el objeto correctamente');
    });
 }
  const eliminarObj = key =>{
    const losDatos = escribeDatosBD("readwrite");
        losDatos[0].delete(key);
        losDatos[1].addEventListener('complete', ()=>{
        console.log('Se ha eliminado el objeto correctamente');
    })
 }
 
 const escribeDatosBD = mode =>{
    const db = IDBRequest.result;
    const IDBtransaction =  db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    return[objectStore, IDBtransaction];
 }