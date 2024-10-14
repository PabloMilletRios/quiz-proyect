import './style.css'
//Textos Etiquetas
const text_title = "Quiz Question";
let text_p;
const text_answers = [
  "London",
  "Berlin",
  "Paris",
  "Madrid",
];

const text_btn1 = "Previous";
const text_btn2 = "Next";


let index = 0; // Índice inicial

//Etiquetas HTML
const body = document.querySelector("body");

const div = document.createElement("div");
div.setAttribute("class", "container");


const h2 = document.createElement("h2");
h2.textContent = text_title;
const p = document.createElement("p2");
p.textContent = text_p;



//-----Preguntas ejercicio-----//

const banco_respuestas = [
  ["London" , "Berlín", "Paris", "Madrid"],
  ["Amazonas", "Nilo", "Yangtsé", "Miño"],
  ["Jane Austen", "Cervantes", "William Shakerpeare", "Charles Dickens"],
  ["7", "8", "9", "10"],
  ]


function asignar_respuestas() {
while(ul.firstChild){
  ul.removeChild(ul.firstChild);
}
  banco_respuestas[index].forEach(answer => {
    const li = document.createElement("li");
    const button_answer = document.createElement("button");
    button_answer.setAttribute("class", "answer-btn");
    button_answer.textContent = answer;
    li.appendChild(button_answer);
    ul.appendChild(li);
  });
}

const ul = document.createElement("ul");
ul.setAttribute("class", "container-answers");



 

//Li sin ForEach 

/*const li = document.createElement("li");
li.setAttribute = document.createElement("class","container-answers");
const li1 = document.createElement("li");
li1.setAttribute = document.createElement("class","container-answers");
const li2 = document.createElement("li");
li2.setAttribute = document.createElement("class","container-answers");
const li3 = document.createElement("li");
li3.setAttribute = document.createElement("class","container-answers");
const button_answer = document.createElement("button");
button_answer.setAttribute("class", "answer-btn");
*/
//-----------------------------//


const div_footer = document.createElement("div");
div_footer.setAttribute("class", "container-footer");

const button_footer = document.createElement("button");
button_footer.setAttribute("class","footer-btn");
button_footer.textContent = text_btn1;

const button_footer2 = document.createElement("button");
button_footer2.setAttribute("class","footer-btn");
button_footer2.textContent = text_btn2

//Estructura del body

body.append(div);
div.append(h2, p, ul, div_footer);
div_footer.append(button_footer, button_footer2);


/*------Funcionalidad--------*/

const banco_preguntas = [
  "What is the capital of France?",
  "What is the longest river in the world?",
  "Who wrote Romeo and Juliet?",
  "How many planets are there in our solar system?",
  ]
  
if (p.textContent = banco_preguntas[0]) {
  button_footer.setAttribute('disabled','disabled');
}

//Creo un contador para controlar la funcionalidad del array para desactivar al contador 
let contadorPrevoius = 0;

//Funcion para controlar el evento
button_footer2.addEventListener('click',function next_prevoius_work() {
  button_footer.removeAttribute('disabled');
});

/*button_footer.addEventListener('click', function disabled_prevoius() {
  if (contadorPrevoius = 0){
    button_footer.setAttribute('disabled','disabled');
  }
})*/


//-----Mi codigo CORREGIR-----//

/*let index = 0; // Índice inicial
p.textContent = banco_preguntas[0];


button_footer2.addEventListener('click', function cambiar_pregunta() {
  if (index < banco_preguntas.length -1) {
    index++; // Incrementa el índice para la siguiente pregunta
    let pregunta = banco_preguntas[index]; // Accede a la pregunta actual
    console.log(pregunta);
    p.textContent = pregunta;
    button_footer2.disabled = index ===banco_preguntas.length;
  } 
})*/


//---------ChatGpt-------//


p.textContent = banco_preguntas[index]; // Muestra la primera pregunta
asignar_respuestas(); //Muestra las primeras respuestas NO GPT
// Funcionalidad para el botón "Next"
button_footer2.addEventListener('click', function cambiar_pregunta() {
  if (index < banco_preguntas.length - 1) {
    index++; // Incrementa el índice para la siguiente pregunta
    asignar_respuestas(); //NO GPT
    p.textContent = banco_preguntas[index]; // Muestra la nueva pregunta
    button_footer.disabled = false; // Activa el botón "Previous"
    
    // Desactiva el botón "Next" si se ha llegado al final
    if (index === banco_preguntas.length - 1) {
      button_footer2.disabled = true;

      
    }
  }
});
// Este solo si. Pero el de arriba toca darle una vuelta
button_footer.addEventListener('click', function prew_pregunta(){
  if(index > 0){
    button_footer2.disabled = false;
    index--;
    asignar_respuestas();
    console.log(banco_preguntas[index])
    p.textContent = banco_preguntas[index];
    if (index === 0) {
      button_footer.disabled = true;
    }
  }
})












