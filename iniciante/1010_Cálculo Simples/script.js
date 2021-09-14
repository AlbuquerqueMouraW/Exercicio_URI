/*
1010_Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada:
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída:
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var firstLineItens = lines.shift().split(" ");

var codigoPeca1 = parseInt(firstLineItens[0]);
var qntPeca1 = parseInt(firstLineItens[1]);
var valorPeca1 = parseFloat(firstLineItens[2]);

var secondLineItens = lines.shift().split(" ");

var codigoPeca2 = parseInt(secondLineItens[0]);
var qntPeca2 = parseInt(secondLineItens[1]);
var valorPeca2 = parseFloat(secondLineItens[2]);

var total = qntPeca1 * valorPeca1 + qntPeca2 * valorPeca2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);




