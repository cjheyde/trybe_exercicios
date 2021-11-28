// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
// em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada 
// for menor que 0 ou maior que 100.

let nota = 700;
let resultado = "";

if (nota > 100 || nota < 0) {
    resultado = "Erro - Essa nota não está dentro da faixa de 0 a 100, favor verificar e repetir!";
}
else if (nota >= 90 && nota <= 100) {
    resultado = "A";
}
else if (nota >= 80) {
    resultado = "B";
}
else if (nota >= 70) {
    resultado = "C";
}
else if (nota >= 60) {
    resultado = "D";
}
else if (nota >= 50) {
    resultado = "E";
}
else {
    resultado = "D";
}

console.log(resultado);