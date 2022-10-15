'use strict';
let escolha = document.querySelector('#escolha');
let txtVal1 = document.querySelector('#primeiroValor');
let txtPos1 = document.querySelector('#posicao1');
let txtVal2 = document.querySelector('#segundoValor');
let txtPos2 = document.querySelector('#posicao2');
let txtQuantidade = document.querySelector('#quantidade');
let resultado = document.querySelector('#resultado');
let btnCalcula = document.querySelector('#btnCalcula');
let btnLimpar = document.querySelector('#btnLimpar');


function gerarPA(an, am, n, m, quantidade) {

    let r = (an - am) / (n - m);
    let a1 = an - (n - 1) * r;

    let quantidade = Number.parseInt(txtQuantidade.value);

    let soma = 0.0;
    for (let i = 1; i <= quantidade; i++) {
        let valor = a1 + (i - 1) * r;
        soma += valor;
        resultado.innerHTML += `a_${i} = ${valor} <br>`;
    }
    resultado.innerHTML += `A soma dos elementos vale ${soma}`;
}

function entradaValores() {
    let an = Number(txtVal1.value);
    let am = Number(txtVal2.value);
    let n = Number.parseInt(txtPos1.value);
    let m = Number.parseInt(txtPos2.value);

    let quantidade = Number.parseInt(txtQuantidade.value);

    let soma = 0.0;

    resultado.style.display = 'block';
    if (escolha.options[escolha.selectedIndex].value === 'pa') {
        resultado.innerHTML = 'Progressão Aritmética';
        // gerarPA(an, am, n, m, quantidade);
    }
    else {
        resultado.innerHTML = 'Progressão Geométrica';
    }
}


btnCalcula.addEventListener('click', entradaValores);

function limpaValores() {
    window.alert('Os dados serão apagados!');
    txtPos1 = '';
    txtPos2 = '';
    txtVal1 = '';
    txtVal2 = '';
    txtQuantidade = '';
    resultado.style.display = 'none';
}

btnLimpar.addEventListener('click', limpaValores);