/*Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.

Entrada
O arquivo de entrada contém 1 valor inteiro qualquer.

Saída
Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.


Exemplo de Entrada	Exemplo de Saída
8                           1
                            3
                            5
                            7

*/
//let lines = gets().split('\n')
//let N = parseInt(lines.shift());

//Adaptação feita para visualizar no navegador.

novoNum();

function novoNum() {
  let N = prompt('Insira um numero:');

  alert ('Os numeros impares de 1 até '+ N +' são:')

  for (let i = 0; i <= N; i++) {
    if (i % 2 == 1) {
      console.log(i)  
      alert (i);
    }
  }

  novaOpcao(); 
}

function novaOpcao() {
  let opcao = prompt('Deseja entrar com um novo numero ? \n 1 - Sim \n 2 - Não');
  if (opcao == 1) {
      novoNum();
  }
  else if (opcao == 2) {
      alert('Até mais!')
  }
}


  
