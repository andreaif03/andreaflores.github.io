//Matemáticas 1

let finalResult; //Definición de variable para almacenar el resultado final
let evenOddResult; //Definición de variable para almacenar el resultado de verificar si es par o impar

let num1 = 6; //Definición del primer número
let num2 = 8; //Definición del segundo número
let num3 = 10; //Definición del tercer número
let num4 = 22; //Definición del cuarto número

let sum = num1 + num2; //Suma de los dos primeros números y almacenamiento del resultado en una variable
let difference = num4 - num3; //Resta del cuarto número con el tercero y almacenamiento del resultado en una variable
finalResult = sum * difference; //Multiplicación de los resultados secundarios y almacenamiento del resultado en una variable llamada finalResult
evenOddResult = finalResult % 2 === 0 ? 0 : 1; //Verificación si finalResult es un número par y almacenamiento del resultado en una variable llamada evenOddResult

//Don't edit the code below here!
const section = document.querySelector('section'); //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para1 = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>)
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`; //Creación de una variable finalResultCheck que contiene un mensaje de éxito si finalResult es igual a 48, de lo contrario, contiene un mensaje que indica el valor real de finalResult
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`; //Establece el contenido de texto del primer párrafo para mostrar si finalResult es igual a 48 o no, utilizando el valor almacenado en la variable finalResultCheck
 
const para2 = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>)
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'; //Creación de una variable llamada evenOddResultCheck que contiene un mensaje dependiendo de si el resultado final es par o impar
para2.textContent = evenOddResultCheck; //Establece el contenido de texto del segundo párrafo como el mensaje que indica si el resultado final es par o impar

section.appendChild(para1); //Agrega el primer párrafo como un hijo del elemento con id "section" para mostrarlo en la interfaz de usuario
section.appendChild(para2); //Agrega el segundo párrafo como un hijo del elemento con id "section" para mostrarlo en la interfaz de usuario
