// 8. Escreva um programa que defina três números em constantes 
// e retorne true se pelo menos uma das três for par. 
// Caso contrário, ele retorna false .
// Bonus: use somente um if .

const a = 9;
const b = 5;
const c = 3;
let resultado = "";

if (a%2 === 0 || b%2 === 0 || c%2 === 0) {
    resultado = "True";
}
else {
    resultado = "False";
}

console.log(resultado);