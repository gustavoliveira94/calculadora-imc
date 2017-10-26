const altura =  document.querySelector(".altura input");
const peso = document.querySelector(".peso input");
const resultado = document.querySelector(".resultado button");
const indice = document.querySelector(".indice");
const voltar = document.querySelector(".voltar");
const valor = document.querySelector(".valor");
const classificacao = document.querySelector(".classificacao");

function calculo() {
    return peso.value / (altura.value * altura.value);
}

function limite() {
    valor.length = 4;
}

function imc() {
    if(peso.value !== "" && altura.value !== "") {
        resultado.classList.add("esconder");
        indice.classList.remove("esconder");
        voltar.classList.remove("esconder");
        valor.innerHTML = calculo();
        return classificacao.innerHTML = classImc();
    }
}

function novoCalculo() {
    resultado.classList.remove("esconder");
    indice.classList.add("esconder");
    voltar.classList.add("esconder");
}

function classImc() {

    if(calculo() < 16) {
        return "Magreza grave";
    }

    else if(calculo() === 16 || calculo() < 17) {
        return "Magreza moderada";
    }

    else if(calculo() === 17 || calculo() < 18.5) {
        return "Magreza leve";
    }

    else if(calculo() === 18.5 || calculo() < 25) {
        return "Saudável";
    }

    else if(calculo() === 25 || calculo() < 30) {
        return "Sobrepeso";
    }

    else if(calculo() === 30 || calculo() < 35) {
        return "Obesidade grau 1";
    }

    else if(calculo() === 35 || calculo() < 40) {
        return "Obesidade Grau II (severa)";
    }

    else if(calculo() > 40) {
        return "Obesidade Grau III (mórbida)";
    }
}

