// 6. Escreva um programa que receba o nome de uma peça de xadrez 
// e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça 
// com letras maiúsculas quanto com letras minúsculas, 
// sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas 
// as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "Rainha";
let result = peca.toLowerCase();
let movimento = "";

if (result === "cavalo") {
    movimento = "em L";
}
else  if (result === "bispo") {
    movimento = "em diagonais";
}
else if (result === "rei") {
    movimento = "1 passo em qualquer sentido";
}
else if (result === "rainha") {
    movimento = "em qualquer sentido";
}
else {
    movimento = "Erro - Essa peça não existe no Xadrez";
}

console.log(movimento);


