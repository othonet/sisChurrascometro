let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let resultado = document.getElementById('resultado');

function calcular() {
    
    let adulto = inputAdultos.value;
    let crianca = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    if (adulto == '' || crianca == '' || duracao == '') {
        swal("Ops!", "Você tem que preencher todos os campos.", "error");
        return;
    } else {
        let status = document.getElementById('status');
        
        let qtdTotalDeCarne = carnePP(duracao) * adulto + (carnePP(duracao) * crianca / 2);

        let qtdTotalDeBebida = bebidaPP(duracao) * adulto + (bebidaPP(duracao) * crianca / 2);

        let qtdTotalDeCerveja = cervejaPP(duracao) * adulto + (cervejaPP(duracao) * crianca / 2);

        status.innerText = "Você vai precisar de:"

        resultado.innerHTML = `<p>🥩 <strong style="background: linear-gradient(to right, #4b6cb7 0%, #182848 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;">${qtdTotalDeCarne / 1000}Kgs</strong> de Carne`
        resultado.innerHTML += `<p>🍹 <strong style="background: linear-gradient(to right, #4b6cb7 0%, #182848 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;" >${Math.ceil(qtdTotalDeBebida / 2000)} Garrafas</strong> de Bebida`
        resultado.innerHTML += `<p>🍻 <strong style="background: linear-gradient(to right, #4b6cb7 0%, #182848 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;">${Math.ceil(qtdTotalDeCerveja / 250)} Piriguetes</strong> de Cerveja`

    }
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}


function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 1200
    } else {
        return 2000
    }
}