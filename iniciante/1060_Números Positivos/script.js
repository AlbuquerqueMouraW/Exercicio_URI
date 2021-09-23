/*
1060_Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada: Seis valores, negativos e/ou positivos.

Saída: Imprima uma mensagem dizendo quantos valores positivos foram lidos.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var positive = 0;

for (i=1; i<=6; i++){
    var value = parseFloat(lines.shift());
    if (value >= 0){
        positive++
    }

}
console.log(`${positive} valores positivos` );
