/*
1072_Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

Entrada: A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-10(7) < X <10(7)).
 

Saída: Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());
var contIn = 0; 
var contOut = 0;

for (i=0; i<n; i++){
    var x = parseInt(lines.shift());
    if (x >=10 && x <=20) {
        contIn++
    }
    else {
        contOut++
    }

}
console.log(`${contIn} in`);
console.log(`${contOut} out`);