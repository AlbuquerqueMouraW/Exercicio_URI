/*
1019_Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada: O arquivo de entrada contém um valor inteiro N.
Saída: Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tempoSeg = parseInt(lines.shift());

var hora = parseInt(tempoSeg /3600);
var minutos = parseInt((tempoSeg % 3600)/60);
tempoSeg = parseInt((tempoSeg % 3600)%60);

console.log(hora +":"+ minutos +":"+ tempoSeg);




