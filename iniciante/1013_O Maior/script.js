/*
1013_Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. 
Utilize a fórmula: x= (a+b+abs*(a-b))/2; 
Entrada: O arquivo de entrada contém três valores inteiros. 
Saída: Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = lines.shift().split(" ");

var a = parseInt(valor[0]);
var b = parseInt(valor[1]);
var c = parseInt(valor[2]);

var maiorAB = (a + b + Math.abs(a-b))/2;
var maiorABC = (c + maiorAB +Math.abs(maiorAB-c))/2;


console.log(maiorABC + " eh o maior")




