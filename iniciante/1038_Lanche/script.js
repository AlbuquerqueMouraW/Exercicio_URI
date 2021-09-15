/*
1038_Com base na tabela abaixo, escreva um programa que leia o código de um item
e a quantidade deste item. A seguir, calcule e mostre o valor da conta a
pagar.
CODIGO	ESPECIFICAÇÃO	PREÇO
1		Cachorro Quente	R$ 4,00
2		X-Salada		R$ 4,50
3		X-Bacon			R$ 5,00
4		Torrada simples	R$ 2,00
5		Refrigerante	R$ 1,50
Entrada O arquivo de entrada contém dois valores inteiros correspondentes ao
código e à quantidade de um item conforme tabela acima.
Saída O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo
valor a ser pago, com 2 casas após o ponto decimal.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(" ");
var pedido = parseInt(entrada[0])
var quantidade = parseInt(entrada[1])


if (pedido == 1){
    var preco = 4.00;
}
else if (pedido == 2){
    preco = 4.50;
}
else if (pedido == 3){
    preco = 5.00; 
}
else if (pedido == 4){
    preco = 2.00;
}
else if (pedido == 5){
    preco = 1.50;
}
else {
    console.log("Escolha uma opção válida");
}

var total = parseFloat(quantidade * preco); 

console.log(`Total: R$ ${total.toFixed(2)}`);




