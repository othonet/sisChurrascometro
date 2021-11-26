let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let mainDiv = document.querySelector('.main').style.display = 'flex';
let resultadoDiv = document.getElementById('resultado').style.display = 'none';

function calcular() {
    
    let adulto = inputAdultos.value;
    let crianca = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    if (adulto == '' || crianca == '' || duracao == '') {
        swal("Ops!", "Você tem que preencher todos os campos.", "error");
        return;
    } else {
        let status = document.getElementById('status');
        let main = document.querySelector('.main');
        let resultado = document.getElementById('resultado');
        
        let qtdTotalDeCarne = carnePP(duracao) * adulto + (carnePP(duracao) * crianca / 2);

        let qtdTotalDeBebida = bebidaPP(duracao) * adulto + (bebidaPP(duracao) * crianca / 2);

        let qtdTotalDeCerveja = cervejaPP(duracao) * adulto + (cervejaPP(duracao) * crianca / 2);

        main.style.display = 'none';
        resultado.style.display = 'flex';


        resultado.innerHTML = `<p>🥩 <strong  class="resultados">Carne: ${qtdTotalDeCarne / 1000}Kgs</strong>`
        resultado.innerHTML += `<p>🍹 <strong class="resultados">Outras bebidas: ${Math.ceil(qtdTotalDeBebida / 2000)}L </strong>`
        resultado.innerHTML += `<p>🍻 <strong class="resultados">Cervejas: ${Math.ceil(qtdTotalDeCerveja / 250)}unid</strong>`

    }
}

function carnePP(duracao) {
    return duracao >= 6 ? 650 : 400
}


function bebidaPP(duracao) {
    return duracao >= 6 ? 1500 : 1000
}

function cervejaPP(duracao) {
    return duracao >= 6 ? 1200 : 2000
}