let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os
// valores nele contidos com a função console.log() ;

// for (let numero of numbers) {
//     console.log(numero);
// }

// 2. Para o segundo exercício, some todos os valores contidos no array
// e imprima o resultado;
// let soma = 0;

// for (let numero of numbers) {
//     soma = soma + numero;
// }

// console.log(soma);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética
// dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido
// pelo número total de elementos.
// let soma = 0;
// let media = 0;

// for (let numero of numbers) {
//     soma = soma + numero;
// }

// media = soma / numbers.length;

// console.log(media);

// 4. Com o mesmo código do exercício anterior, caso o valor final
// seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja,
// imprima a mensagem: "valor menor ou igual a 20";
// if (media > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }

// 5. Utilizando for, descubra qual o maior valor contido no array e
// imprima-o;
// let maiorValor = 0;

// for (let numero of numbers) {
//     if (numero > maiorValor) {
//         maiorValor = numero;
//     }
// }

// console.log(maiorValor);


// 6. Descubra quantos valores ímpares existem no array e imprima
// o resultado. Caso não exista nenhum, imprima a
// mensagem: "nenhum valor ímpar encontrado";

// let impares = [];

// for (let numero of numbers) {
//     if (numero % 2 !== 0) {
//         impares.push(numero);
//     }
// }

// console.log(impares);

// 7. Utilizando for , descubra qual o menor valor contido 
// no array e imprima-o;
// let menorValor = numbers[0];

// for (let numero of numbers) {
//     if (numero < menorValor) {
//         menorValor = numero;
//     }
// }

// console.log(menorValor);

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima 
// o resultado;
let arrayA25 = [];

for (let index = 0; index < 25; index += 1) {
    arrayA25.push(index + 1);
}

// console.log(arrayA25);

// 9. Utilizando o array criado no exercício anterior imprima o 
// resultado da divisão de cada um dos elementos por 2 .
let arrayDiv2 = [];

for (index = 0; index < 25; index += 1) {
    arrayDiv2[index] = arrayA25[index] / 2;
}

console.log(arrayDiv2);