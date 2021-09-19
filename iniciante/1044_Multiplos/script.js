/*
1044_Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada: A entrada contém valores inteiros.

Saída: A saída deve conter uma das mensagens conforme descrito acima.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(" ");
var A = parseInt(entrada[0]);
var B = parseInt(entrada[1]);

if (A%B == 0 || B%A == 0){
    console.log('São Multiplos')
}
else {
    console.log('Não são Multiplos')
}


