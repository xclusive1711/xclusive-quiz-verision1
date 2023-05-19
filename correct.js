let question = [
    {"question": "2 + 2",
     "a": "3",
     "b": "4",
     "c": "7",
     "d": "9" },
     {"question": "whats the nigerian flag color?",
    "a": "red white green",
    "b": "pink yellow white",
    "c": "green white green",
    "d":  "white and blue"},
    {"question": "what is 5 * 5",
    "a": "25",
    "b": "65",
    "c": "34",
    "d": "12"},
    {"question": "WHO IS THE GOVERNOR OF OYO STATE?",
    "a": "ADAM OSHIOMOLE",
    "b": "PROFESSOR WOLE SOYINKA",
    "c": "SEYI MAKINDE",
    "d": "FRANCIS ODIEZIE"},
    {"question": "WHICH DAY IS THE DEMOCRACY DAY?",
    "a": "EVERYDAY",
    "b": "DECEMBER 25TH",
    "c": "MAY 29",
    "d": "JUNE 1ST"},
    {"question": "what is 5 * 5",
    "a": "25",
    "b": "65",
    "c": "34",
    "d": "12"},
    {"question": "which of this is not a domestic animal?",
    "a": "GOAT",
    "b": "HEN",
    "c": "LION",
    "d": "SHEEP"},
    {"question": "_________ IS THE NAME OF A PERSON, ANIMAL, PLACE OR THING?",
    "a": "NOUN",
    "b": "PLURAL",
    "c": "MOTOR",
    "d": "SENTENCE"},
    {"question": "WHAT IS 35/7?",
    "a": "43",
    "b": "5",
    "c": "90",
    "d": "12"},
    {"question": "WHICH OF THIS IS NOT A TELECOMMUNICATION NETWORK IN NIGERIA",
    "a": "MTN",
    "b": "GLO",
    "c": "NTEL",
    "d": "STERLING"},
    {"question": "WHICH OF THESE IS NOT A PRIMARY COLOR?",
    "a": "BLUE",
    "b": "YELLOW",
    "c": "BLACK",
    "d": "INDIGO"}
];
let k = 1;
let answers = [1, 2, 0, 2, 2, 0, 2, 0, 1, 3, 3];
let QUESTIONS = document.getElementById("question");
let SHOW = document.getElementById("show");
let NEXT = document.getElementById("next");
let i = 0;
let score = 0;
QUESTIONS.innerHTML = `
<h2>XCLUSIVE QUIZ COMPETITION<br>
QUESTION ${k}/${question.length}</h2>
<p>${question[i].question}</p>
<input type="radio" id="select${i}" name="option" value="${question[i].a}"><label>${question[i].a}</label><br>
<input type="radio" id="select${i}" name="option" value="${question[i].b}"><label>${question[i].b}</label><br>
<input type="radio" id="select${i}" name="option" value="${question[i].c}"><label>${question[i].c}</label><br>
<input type="radio" id="select${i}" name="option" value="${question[i].d}"><label>${question[i].d}</label><br>`

function next(){
    k++;
    let SELECT = document.querySelectorAll(`#select${i}`);
    if (SELECT[answers[i]].checked){
        score++;
    }    
    i = i + 1;
    // location.reload();
    QUESTIONS.innerHTML = `
    <h2>XCLUSIVE QUIZ COMPETITION<br>
QUESTION ${k}/${question.length}</h2>
<p>${question[i].question}</p>
<input type="radio" id="select${i}" name="option" value="${question[i].a}"><label>${question[i].a}</label><br>
<input type="radio" id="select${i}" name="option" value="${question[i].b}"><label>${question[i].b}</label><br>
<input type="radio" id="select${i}" name="option" value="${question[i].c}"><label>${question[i].c}</label><br>
<input type="radio" id="select${i}" name="option" value="${question[i].d}"><label>${question[i].d}</label><br><br>
<p id="score">you scored ${score}/${question.length}</p>`
}
