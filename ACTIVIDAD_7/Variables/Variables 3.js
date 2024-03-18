//Variables 3

let myName = 'Default'; //Declara e inicializa la variable myName con el valor 'Default'
myName = 'Andrea'; //Cambia la variable myName con el valor 'Andrea'
let myAge = 20; //Declara e inicializa la variable myAge con el valor numérico 20

// Don't edit the code below here!
const section = document.querySelector('section'); //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para1 = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>)
const para2 = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>)

para1.textContent = myName; // Establece el contenido de texto del primer párrafo como el valor de myName
para2.textContent = `In 20 years, I will be ${myAge + 20}`; //Calcula la edad que tendrá 'Andrea' dentro de 20 años y establece el contenido de texto del segundo párrafo con esa información

section.appendChild(para1); //Agrega el párrafo como un hijo del elemento con id "section"
section.appendChild(para2); //Agrega el párrafo como un hijo del elemento con id "section"
