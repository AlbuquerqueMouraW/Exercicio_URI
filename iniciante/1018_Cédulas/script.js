/*
1018_Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada: O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).
Saída: Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());

var troco = valor;

var cem = parseInt(troco/100);
troco = troco % 100;

var cinquenta = parseInt(troco/50);
troco = troco % 50;

var vinte = parseInt(troco/20);
troco = troco % 20;

var dez = parseInt(troco/10);
troco = troco % 10;

var cinco = parseInt(troco/5);
troco = troco % 5;

var dois = parseInt(troco/2);
troco = troco % 2;

var um = parseInt(troco/1);
troco = troco % 1;

console.log(valor);
console.log(`${cem} nota(s) de R$ 100,00` );
console.log(`${cinquenta} nota(s) de R$ 50,00`);
console.log(`${vinte} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinco} nota(s) de R$ 5,00`);
console.log(`${dois} nota(s) de R$ 2,00`);
console.log(`${um} nota(s) de R$ 1,00`);

/*Ou

var valor = parseInt(lines.shift());

var troco = valor;
const notas = [100,50,20,10,5,1];

console.log(valor);
for (let nota of notas){
    let qntNotas = parseInt(valor/nota);
    console.log(`${qntNotas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}
*/




