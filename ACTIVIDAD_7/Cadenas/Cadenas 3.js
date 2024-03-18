//Cadenas 3

const quote = 'I dO nOT lIke gREen eGgS anD HAM'; //Declara una variable llamada quote que contiene una cita en mayúsculas y minúsculas
const fixedQuote = quote.charAt(0).toUpperCase() + quote.slice(1).toLowerCase().replace('green eggs and ham', 'broccoli'); //Corrige la capitalización de la oración y reemplaza la cadena 'huevos verdes con jamón' con 'brócoli'
const finalQuote = fixedQuote + '.'; //Agrega un punto al final de la cita

//Don't edit the code below here!
section.innerHTML = ' '; //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para1 = document.createElement('p'); //Creación de un elemento de párrafo para mostrar la cita corregida
para1.textContent = fixedQuote; //Asigna la cita corregida al elemento de párrafo

const para2 = document.createElement('p'); //Creación de un elemento de párrafo para mostrar la cita final
para2.textContent = finalQuote; //Asigna la cita corregida al elemento de párrafo

section.appendChild(para1); //Agrega el primer párrafo al elemento con id "section" para mostrarlo en la interfaz de usuario
section.appendChild(para2); //Agrega el segundo párrafo al elemento con id "section" para mostrarlo en la interfaz de usuario
