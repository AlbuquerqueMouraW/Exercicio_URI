/*
1012_Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.
Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var value = lines.shift().split(" ");

var A = parseFloat(value[0]);
var B = parseFloat(value[1]);
var C = parseFloat(value[2]);

var triangulo = parseFloat((A*C)/2);
var circulo = parseFloat(3.14159*(C*C));
var trapezio = parseFloat((A+B)*C/2);
var quadrado = parseFloat(B*B);
var retangulo = parseFloat(A*B);


console.log("TRIANGULO: "+ triangulo.toFixed(3));
console.log("CIRCULO: "+ circulo.toFixed(3));
console.log("TRAPEZIO: "+ trapezio.toFixed(3));
console.log("QUADRADO: "+ quadrado.toFixed(3));
console.log("RETANGULO: "+ retangulo.toFixed(3));




