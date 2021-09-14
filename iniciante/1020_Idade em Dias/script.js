/*
1020_Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias
Obs: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada: O arquivo de entrada contém um valor inteiro.
Saída: Imprima a saída conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dias = parseInt(lines.shift());

var ano = parseInt(dias/365);
var mes = parseInt((dias%365)/30);
dias = parseInt((dias%365)%30);

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(s)`);
console.log(`${dias} dia(s)`);




