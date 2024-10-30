const nome = prompt("Qual o seu nome?")
let cidades = ""
let contagem = 0

let cidadeVisitada = prompt("Você já visitou alguma cidade? (Sim/Não)")

 while (cidadeVisitada === "Sim") {
     let cidade = prompt("Qual foi a cidade?")
     cidades += (cidades ? ", " : "") + cidade
     contagem++
     cidadeVisitada = prompt("Você visitou alguma outra cidade? (Sim/Não)")
 }

 alert("O turista " + nome + "\nQuantidade de cidades visitadas: " + contagem + "\nCidades visistadas:\n" + cidades)