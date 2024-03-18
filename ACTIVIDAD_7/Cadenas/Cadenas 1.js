//Cadenas 1

const quoteStart = "Don't judge each day by the harvest you reap"; //Declaración de una variable llamada quoteStart que contiene la primera mitad de la cita proporcionada
const quoteEnd = 'but by the seeds that you plant.'; //Declaración de una variable llamada quoteEnd que contiene la segunda mitad de la cita proporcionada

const finalQuote = quoteStart + quoteEnd; //Concatenación de las dos mitades de la cita para formar la cita completa y almacenamiento en la variable finalQuote

//Don't edit the code below here!
section.innerHTML = ' '; //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para1 = document.createElement('p'); //Creación de un elemento de párrafo para mostrar la cita completa
para1.textContent = finalQuote; //Asigna la cita completa al elemento de párrafo

section.appendChild(para1); // Agrega el párrafo al elemento con id "section" para mostrarlo en la interfaz de usuario
