let nome = window.prompt("Qual seu nome?")
let sobrenome = window.prompt("Qual seu sobrenome?")
let estudo = window.prompt("Qual o seu campo de estudo?")
let anoNascimento = window.prompt("Em que ano nasceu?")

document.getElementById(nome, function() {
    console.log("O seu nome é " + nome);
})