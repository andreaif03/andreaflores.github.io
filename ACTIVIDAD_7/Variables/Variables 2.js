//Variables 2

let myName = 'Andrea'; //Corrige el valor almacenado en la variable myName existente y asigna mi nombre a la variable myName

//Don't edit the code below here!
const section = document.querySelector('section'); //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>)
para.textContent = myName; //Establece su contenido de texto como el valor de myName

section.appendChild(para); //Agrega el párrafo como un hijo del elemento con id "section"
