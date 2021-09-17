/*
1042_Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada: A entrada contem três números inteiros.

Saída: Imprima a saída conforme foi especificado.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(" ");
var ent1 = parseInt(entrada[0]);
var ent2 = parseInt(entrada[1]);
var ent3 = parseInt(entrada[2]);

if (ent1 <= ent2 && ent2 <= ent3){
    console.log(ent1);
    console.log(ent2);
    console.log(ent3);
}
else if (ent1 <= ent3 && ent3 <= ent2){
    console.log(ent1);
    console.log(ent3);
    console.log(ent2);
}
else if (ent2 <= ent1 && ent1 <= ent3){
    console.log(ent2);
    console.log(ent1);
    console.log(ent3);
}
else if (ent2 <= ent3 && ent2 <= ent1){
    console.log(ent2);
    console.log(ent3);
    console.log(ent1);
}
else if (ent3 <= ent1 && ent1 <= ent2){
    console.log(ent3);
    console.log(ent1);
    console.log(ent2);
}
else{
    console.log(ent3);
    console.log(ent2);
    console.log(ent1);
}

console.log('\n'+ent1);
console.log(ent2);
console.log(ent3);

