//Cadenas 4

const theorem = 'Pythagorean theorem'; //Declara una constante llamada 'theorem' que contiene el nombre del teorema de Pitágoras.

const a = 5; //Declara una constante 'a' que representa la longitud de uno de los lados de un triángulo rectángulo.
const b = 8; //Declara una constante 'b' que representa la longitud del otro lado de un triángulo rectángulo.

//Utilizamos una plantilla literal para construir una cadena de texto con marcadores de posición para el teorema, los valores de 'a' y 'b', y el cálculo de la longitud de la hipotenusa utilizando el teorema de Pitágoras.
const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(a ** 2 + b ** 2)}.`;

//Don't edit the code below here!
const section = document.querySelector('section'); //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para1 = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>).
para1.textContent = myString; //Asigna la cadena de texto 'myString' como contenido de texto del párrafo.

section.appendChild(para1); //Agrega el elemento de párrafo al elemento con el id "section" en el documento HTML.
