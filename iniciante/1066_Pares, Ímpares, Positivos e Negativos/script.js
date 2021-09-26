/*
1066_Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada: O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída: Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numerosPares = 0;
var numerosImpares = 0;
var numerosPositivos = 0;
var numerosNegativos = 0;

for (i=1; i<=5; i++){
    var value = parseFloat(lines.shift());
    if (value % 2 == 0){
        numerosPares++;
    }
    else {
        numerosImpares++;
    }
    if (value > 0) {
        numerosPositivos++;
    }
    else if (value < 0) {
        numerosNegativos++;
    }

}
console.log(`${numerosPares} valor(es) par(es)`);
console.log(`${numerosImpares} valor(es) impar(es)`);
console.log(`${numerosPositivos} valor(es) positivo(s)`);
console.log(`${numerosNegativos} valor(es) negativo(s)`);



