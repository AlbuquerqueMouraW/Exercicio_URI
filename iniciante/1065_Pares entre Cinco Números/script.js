/*
1065_Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada: O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída: Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numerosPares = 0;

for (i=1; i<=5; i++){
    var value = parseFloat(lines.shift());
    if (value % 2 == 0){
        numerosPares++
    }

}
console.log(`${numerosPares} valores pares` );
