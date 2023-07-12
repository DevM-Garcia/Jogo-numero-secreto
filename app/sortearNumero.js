const numeroSecreto = gerarNumeroAleatorio();
const menorValor = 1;
const maiorValor = 1000;

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 1000 + 1 )
}

console.log('numero secreto é : ', numeroSecreto)

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor;