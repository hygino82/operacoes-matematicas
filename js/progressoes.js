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

    let soma = 0.0;
    resultado.innerHTML += `r = ${r}<br>`;

    for (let i = 1; i <= quantidade; i++) {
        let valor = a1 + (i - 1) * r;
        soma += valor;
        resultado.innerHTML += `a_${i} = ${valor} <br>`;
        //console.log(`a_${i} = ${valor}`);
    }

    resultado.innerHTML += `A soma dos elementos vale ${soma}`;
}

function gerarPG(an, am, n, m, quantidade) {
    let q = 0;

    if (m < n) {
        q = Math.log(am / an) / Math.log(m - n);
    }
    else {
        q = Math.log(an / an) / Math.log(n - m);
    }
    resultado.innerHTML += `q = ${q}<br>`;
}

function entradaValores() {
    resultado.style.display = 'block';

    let n = Number(txtPos1.value);
    let m = Number(txtPos2.value);
    let an = Number(txtVal1.value);
    let am = Number(txtVal2.value);

    let quantidade = Number.parseInt(txtQuantidade.value);

    resultado.innerHTML =
        `Valores informados<br>
        a_${n} = ${an}<br>
        a_${m} = ${am}<br>
        `;
    if (escolha.options[escolha.selectedIndex].value === 'pa') {
        resultado.innerHTML += 'Progressão Aritmética<br>';
        gerarPA(an, am, n, m, quantidade);
    }
    else {
        resultado.innerHTML += 'Progressão Geométrica<br>';
        gerarPG(an, am, n, m, quantidade);
    }
}

btnCalcula.addEventListener('click', entradaValores);

function limpaValores() {
    window.alert('Os dados serão apagados!');
    txtPos1.value = '1';
    txtPos2.value = '2';
    txtVal1.value = '0';
    txtVal2.value = '0';
    txtQuantidade.value = '1';
    resultado.style.display = 'none';
}

btnLimpar.addEventListener('click', limpaValores);