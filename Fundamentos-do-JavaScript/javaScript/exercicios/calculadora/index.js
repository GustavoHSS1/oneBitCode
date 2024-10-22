const soma = document.getElementById("somar");

soma.addEventListener("click" , function() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const resultado = document.getElementById("resultado");

    const somar = parseInt(num1.value) + parseInt(num2.value);

    resultado.innerText = somar;
});

const subtrair = document.getElementById("subtrair");

subtrair.addEventListener("click" , function() {
    const subtrair = parseInt(num1.value) - parseInt(num2.value);

    resultado.innerText = subtrair;
})

const multiplicar = document.getElementById("multiplicar");

multiplicar.addEventListener("click" , function() {
    const multiplicar = parseInt(num1.value) * parseInt(num2.value);

    resultado.innerText = multiplicar;
})

const dividir = document.getElementById("dividir");

dividir.addEventListener("click" , function() {
    const dividir = parseInt(num1.value) / parseInt(num2.value);

    resultado.innerText = dividir;
})