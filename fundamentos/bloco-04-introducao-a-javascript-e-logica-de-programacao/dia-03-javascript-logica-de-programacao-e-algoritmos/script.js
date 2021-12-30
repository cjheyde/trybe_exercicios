// 3.1 - O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

let fatorial = 4;
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


