//Matemáticas 2

//Final result should be 4633.33

let result = (7 + 13) / (9 + 7); //Actualización del primer cálculo para obtener el resultado correcto
let result2 = (100 / 2) * 6; //Actualización del segundo cálculo para obtener el resultado correcto

result *= result2; //Multiplicación de los resultados y almacenamiento del resultado en la variable result

let finalResult = result.toFixed(2); //Formateo del resultado con 2 decimales y almacenamiento en la variable finalResult
typeof(finalResult); //Verifica el tipo de dato de finalResult y devuelve una cadena que indica el tipo de dato
let finalNumber = Number(finalResult); //Conversión de finalResult a tipo number y almacenamiento en la variable finalNumber

//Don't edit the code below here!
section.innerHTML = ' '; //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para1 = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>)
para1.textContent = `Your finalResult is ${ finalResult }`; //Establece el contenido de texto del primer párrafo para mostrar el resultado final


const para2 = document.createElement('p'); //Crea un nuevo elemento de párrafo (<p>)
const finalNumberCheck = typeof finalNumber === 'number' ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`; //Verificación del tipo de dato de finalNumber y creación de un mensaje apropiado
para2.textContent = finalNumberCheck; //Establece el contenido de texto del primer párrafo para mostrar el finalNumber

section.appendChild(para1); //Agrega el primer párrafo como un hijo del elemento con id "section" para mostrarlo en la interfaz de usuario
section.appendChild(para2); //Agrega el segundo párrafo como un hijo del elemento con id "section" para mostrarlo en la interfaz de usuario
