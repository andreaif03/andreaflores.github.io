//Matemáticas 3

//Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000; //Peso del elefante en kg
const mouseWeight = 2; //Peso del ratón en kg

//Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2; //Altura del avestruz en metros
const duckHeight = 0.3; //Altura del pato en metros

//Statement 3: The two passwords match
const pwd1 = 'stromboli'; //Primera contraseña
const pwd2 = 'stROmBoLi'; //Segunda contraseña

const weightComparison = eleWeight < mouseWeight; //Prueba si el peso del elefante es menor que el peso del ratón
const heightComparison = ostrichHeight > duckHeight; //Prueba si la altura del avestruz es mayor que la altura del pato
const pwdMatch = pwd1.toLowerCase() === pwd2.toLowerCase(); //Prueba si las dos contraseñas coinciden (ignorando mayúsculas y minúsculas)

//Don't edit the code below here!
const section = document.querySelector('section'); //Editar el código, borra el contenido HTML dentro del elemento con id "section"

const para1 = document.createElement('p'); //Crea un nuevo párrafo para mostrar el resultado de la primer prueba
const para2 = document.createElement('p'); //Crea un nuevo párrafo para mostrar el resultado de la segunda prueba
const para3 = document.createElement('p'); //Crea un nuevo párrafo para mostrar el resultado de la tercer prueba

const weightTest = weightComparison ? 'True — elephants weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!'; //Generación de mensajes basados en el resultado de la primer prueba
const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?'; //Generación de mensajes basados en el resultado de la segunda prueba
const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them'; //Generación de mensajes basados en el resultado de la tercer prueba

para1.textContent = weightTest; //Asigna el mensaje de la prueba de peso al primer párrafo
para2.textContent = heightTest; //Asigna el mensaje de la prueba de altura al segundo párrafo
para3.textContent = pwdTest; //Asigna el mensaje de la prueba de contraseña al tercer párrafo

section.appendChild(para1); // Agrega el primer párrafo al elemento con id "section" para mostrarlo en la interfaz de usuario
section.appendChild(para2); // Agrega el segundo párrafo al elemento con id "section" para mostrarlo en la interfaz de usuario
section.appendChild(para3); // Agrega el tercer párrafo al elemento con id "section" para mostrarlo en la interfaz de usuario
