const atkName = prompt("Qual o nome do atacante?")
const pwrAtk = parseFloat(prompt("Qual o poder de ataque do atacante?"))

const defName = prompt("Qual o nome do personagem defensor?")
let lifePoints = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const defPower = parseFloat(prompt("Quanto de defesa ele tem?"))
const hasShield = prompt("Tem escudo? (sim/não)")

let dmgCaused = 0

if(pwrAtk > defPower && hasShield === "não") {
    dmgCaused = pwrAtk - defPower
} else if (pwrAtk > defPower && hasShield === "sim") {
    dmgCaused = (pwrAtk - defPower) / 2
}

lifePoints -= dmgCaused

alert(atkName + " causou " + dmgCaused + " pontos de dano em " + defName)
alert(
    atkName + "\nPoder de ataque: " + pwrAtk + "\n\n " + defName + "\nPontos de vida: " + lifePoints + "\nPoder de defesa: " + defPower + "\nPossui escudo: " + hasShield
)
