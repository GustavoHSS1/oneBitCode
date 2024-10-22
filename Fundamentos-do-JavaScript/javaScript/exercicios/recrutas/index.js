let nameValue = window.prompt("Diga o seu nome:");
let lastNameValue = window.prompt("Diga o seu sobrenome:")
let studyValue = window.prompt("Diga a sua área de estudo:")
let yearValue = window.prompt("Diga em que ano nasceu:")

let nameElement = document.getElementById('nome');
let lastNameElement = document.getElementById('sobrenome');
let studyElement = document.getElementById('estudo');
let yearElement = document.getElementById('anoNascimento')
let year = 2024;

nameElement.innerHTML = nameValue;
lastNameElement.innerHTML = lastNameValue;
studyElement.innerHTML = studyValue;

function calcular(yearValue, year) {
    return year - yearValue;
}

let idade = calcular(yearValue, year);
yearElement.innerHTML = "Você tem " + idade + " anos";