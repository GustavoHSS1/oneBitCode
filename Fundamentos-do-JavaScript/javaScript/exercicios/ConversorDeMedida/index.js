const valorMetro = prompt("Diga um valor em metros:")
const medida = prompt("Agora diga pra qual unidade de medida ele deve ser convertido:" +
     "\nn1.milímetro(mm)" +
    "\nn2.centímetro (cm)" +
    "\nn3.decímetro(dm)" +
    "\nn4.decâmetro(dam)" +
    "\nn5.hectômetro(hm)" +
    "\nn6.quilômetro(km)")

const medidaNumerica = parseFloat(medida)

switch (medidaNumerica) {
    case 1:
        alert("Resultado " + valorMetro + "m = " + valorMetro * 1000 + "mm")
        break
    case 2:
        alert("Resultado " + valorMetro + "m = " + valorMetro * 100 + "cm")
        break
    case 3:
        alert("Resultado " + valorMetro + "m = " + valorMetro * 10 + "dm")
        break
    case 4:
        alert("Resultado " + valorMetro + "m = " + valorMetro / 10 + "dam")
        break
    case 5:
        alert("Resultado " + valorMetro + "m = " + valorMetro / 100 + "hm")
        break
    case 6:
        alert("Resultado " + valorMetro + "m = " + valorMetro / 1000 + "km")
        break
    default:
    alert("Opção inválida")
}