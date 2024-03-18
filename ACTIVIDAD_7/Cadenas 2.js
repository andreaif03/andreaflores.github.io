//Cadenas 2

const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.'; //Declaración de una variable llamada quote que contiene la cita original
const substring = 'green eggs and ham'; //Declaración de una variable llamada substring que contiene la subcadena a buscar dentro de la cita original

const quoteLength = quote.length; //Recuperar la longitud de la cita y almacenarla en una variable llamada quoteLength
const index = quote.indexOf(substring); //Buscar la posición del índice donde aparece la subcadena dentro de la cita original y almacenar ese valor en una variable llamada index

//Usar una combinación de los métodos slice() para recortar la cita original de modo que se reemplace la parte que contiene la subcadena con la frase proporcionada y almacenar la nueva cita en una variable llamada revisedQuote
const revisedQuote = quote.slice(0, index) + 'No me gustan los huevos verdes y el jamón' + quote.slice(index + substring.length); 

//Don't edit the code below here!
section.innerHTML = ' '; //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para1 = document.createElement('p'); //Creación de un elemento de párrafo para mostrar la longitud de la cita original
para1.textContent = `The quote is ${ quoteLength } characters long.`; //Asigna el texto con la longitud de la cita al elemento de párrafo

const para2 = document.createElement('p'); //Creación de un elemento de párrafo para mostrar la cita revisada
para2.textContent = revisedQuote; //Asigna la cita revisada al elemento de párrafo

section.appendChild(para1); //Agrega el primer párrafo al elemento con id "section" para mostrarlo en la interfaz de usuario
section.appendChild(para2); //Agrega el segundo párrafo al elemento con id "section" para mostrarlo en la interfaz de usuario
