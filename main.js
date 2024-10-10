import './style.css'
//Textos Etiquetas
const text_title = "Quiz Question";
const text_p = "What is the capital of France?";
const text_answers = [
  "London",
  "Berlin",
  "Paris",
  "Madrid",
];


const text_btn1 = "Previous";
const text_btn2 = "Next";



//Etiquetas HTML
const body = document.querySelector("body");

const div = document.createElement("div");
div.setAttribute("class", "container");


const h2 = document.createElement("h2");
h2.textContent = text_title;
const p = document.createElement("p2");
p.textContent = text_p;


const ul = document.createElement("ul");
ul.setAttribute("class", "container-answers");
 text_answers.forEach(answer => {
  const li = document.createElement("li");
  const button_answer = document.createElement("button");
  button_answer.setAttribute("class", "answer-btn");
  button_answer.textContent = answer;
  li.appendChild(button_answer);
  ul.appendChild(li);

});
 

//Li sin ForEach .

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
