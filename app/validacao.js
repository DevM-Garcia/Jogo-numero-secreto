function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML = '<div>Caramba juvena, so bot errado em! Precisa ser um número !!!</div>'
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML = `
        <div>
        Presta atenção juvena : O chute precisa estar entre ${menorValor} e ${maiorValor}.
        </div>
        `
    }
    if(numero === numeroSecreto ){
        document.body.innerHTML = `
        <h2>Ai se chapo no angulo jogador HAAHHAHAHAH Parabéns!
        <h3>O número secreto é ${numeroSecreto}.
        <button id= "jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
        O número secreto é menor <i class="fa-solid fa-arrow-down-from-bracket"></i>
        </div>`
    } else{elementoChute.innerHTML +=`
        <div>
        O número secreto é maior <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click' , e =>{
    if(e.target.id=='jogar-novamente'){
        window.location.reload()
    }
})
