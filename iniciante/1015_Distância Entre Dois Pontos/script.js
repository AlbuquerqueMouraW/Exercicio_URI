/*
1015_Leia os quatro valores correspondentes aos eixos x e y de dois pontos 
 quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles,  mostrando 4 casas decimais após a vírgula, segundo a fórmula: http://prntscr.com/jvxvhv

 ENTRADA: O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.
 SAÍDA: Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var value = lines.shift().split(" ");
var value2 = lines.shift().split(" ");

var x1 = parseFloat(value[0]);
var y1 = parseFloat(value[1]);

var x2 = parseFloat(value2[0]);
var y2 = parseFloat(value2[1]);

var dist = Math.sqrt(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2));

console.log(dist.toFixed(4));




