const nome1 = prompt("Digite o nome do primeiro carro")
const velocidade1 = prompt("Digite a velocidade desse primeiro carro")

const nome2 = prompt("Digite o nome do segundo carro")
const velocidade2 = prompt("Digite a velocidade desse segundo carro")

if (velocidade1 < velocidade2) {
    alert("O " + nome1 + " é mais rápido que o carro " + nome2 + "!")
} else if (velocidade1 > velocidade2) {
    alert("O " + nome2 + " é mais rápido que o carro " + nome1 + "!")
} else {
    alert("Os carros tem a mesma velocidade!")
}