//Variables 1

let myName = "Andrea"; //Declara una variable llamada myName y la inicializa con un valor
let myAge = 20; //Declara una variable llamada myAge y la inicializa con un valor en la misma línea

//Don't edit the code below here!
section.innerHTML = ' '; //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para1 = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>)
para1.textContent = myName; //Establece su contenido de texto como el valor de myName

const para2 = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>)
para2.textContent = myAge; //Establece su contenido de texto como el valor de myAge

section.appendChild(para1); //Agrega el primer párrafo (que contiene el valor de myName) como un hijo del elemento con id "section"
section.appendChild(para2); //Agrega el segundo párrafo (que contiene el valor de myAge) como un hijo del elemento con id "section"