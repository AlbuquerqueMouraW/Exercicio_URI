/*
1049_Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.


Entrada: A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída: Imprima o nome do animal correspondente à entrada fornecida.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tipoAnimalA  = lines.shift();
var tipoAnimalB = lines.shift();
var tipoAnimalC = lines.shift();

if (tipoAnimalA === "vertebrado" && tipoAnimalB === "ave" && tipoAnimalC === "carnivoro") {
    console.log('aguia');
} 
if (tipoAnimalA === "vertebrado" && tipoAnimalB === "ave" && tipoAnimalC === "onivoro"){
    console.log('pomba');
}
if (tipoAnimalA === "vertebrado" && tipoAnimalB === "mamifero" && tipoAnimalC === "onivoro"){
    console.log('homem');
}
if (tipoAnimalA === "vertebrado" && tipoAnimalB === "mamifero" && tipoAnimalC === "herbivoro"){
    console.log('vaca');
}
if (tipoAnimalA === "invertebrado" && tipoAnimalB === "inseto" && tipoAnimalC === "hematofago"){
    console.log('pulga');
}
if (tipoAnimalA === "invertebrado" && tipoAnimalB === "inseto" && tipoAnimalC === "herbivoro"){
    console.log('lagarta');
}
if (tipoAnimalA === "invertebrado" && tipoAnimalB === "anelideo" && tipoAnimalC === "hematofago"){
    console.log('sanguessuga');
}
if (tipoAnimalA === "invertebrado" && tipoAnimalB === "anelideo" && tipoAnimalC === "onivoro"){
    console.log('minhoca');
}
 else{
    console.log('escolha uma opção valida');
} 


