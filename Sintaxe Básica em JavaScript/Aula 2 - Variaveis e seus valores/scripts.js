//Tipos primitivos

//boolean
var vDuF = false;
console.log(typeof(vDuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = "Lucas"
console.log(typeof(nome)); 

//como declarar variavel 
var varialvel = "Lucas";
varialvel = "Pedro";
console.log(varialvel);

let variavel2 = "Lucas";
variavel2 = "Pedro";
console.log(variavel2);

const constante = "Lucas";
constante = "Pedro";
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno ='local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuição
var atribuicao = 'Lucas';
console.log(atribuicao);

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adiçao
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 2;
console.log(multiplicacao);

//divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//maior que
var maiorQue = 5 > 2
console.log(maiorQue);

//menor que
var menorQue = 5 > 2
console.log(menorQue);

//maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = ! true;
console.log(nao);