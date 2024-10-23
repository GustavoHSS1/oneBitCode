let atkName = prompt("Diga o nome do seu ataque:")
let powerAtk = prompt("Digite qual o poder de ataque:")
let name = prompt("Diga qual o nome do seu personagem:")
let qntLife = prompt("Diga qual a quantidade de vida do seu personagem:")
let defOther = prompt("Quanto de defesa o outro personagem tem?")
let shield = confirm("Ele tem escudo?")

if (powerAtk > defOther && shield == false) {
    alert("O dano do seu ataque foi " + (defOther - powerAtk) + "!")
} else if (powerAtk > defOther && shield == true) {
   alert("Dano reduzido " + (defOther / 2) + "!")
} else {
    alert("mizera")
}