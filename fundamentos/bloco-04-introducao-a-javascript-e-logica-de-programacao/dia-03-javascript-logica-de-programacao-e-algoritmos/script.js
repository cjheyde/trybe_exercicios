// 3.1 - O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

let fatorial = 10;
let resultado = 1;

for (let index = fatorial; index > 0; index -= 1) {
    resultado = resultado * fatorial;
    fatorial = fatorial - 1;
}

console.log(resultado);

// 3.2 - - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
// Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string 
// abaixo como exemplo, depois troque por outras para verificar se seu algoritmo 
// está funcionando corretamente.

// let word = 'tryber';

// 3- Considere o array de strings abaixo:

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
//  Considere o número de caracteres de cada palavra.

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva 
// um algoritmo que retorne o maior número primo entre 0 e 50.


