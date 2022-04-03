// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio.
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como
// parâmetros o número apostado e uma função que checa se o número apostado
// é igual ao número sorteado. O retorno da sua HOF deve ser uma string
// (Ex: "Tente novamente" ou "Parabéns você ganhou").


// //meu código sem HOFs funcionando
// const sorteio = (min, max) =>  {
//   // valor inteiro randômico e aleatório entre 5 e 1. - ref. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   const numSorteado = Math.ceil(Math.random() * ((max - min) + min));
//   return numSorteado;
// }

// const numSorteado = sorteio(1, 5);

// function resultadoAposta(numApostado, num) {
// if (numApostado === num) {
//     console.log('Parabéns você ganhou');
// } else {
//     console.log('Tente novamente');
// }};

// resultadoAposta(3, numSorteado);


// Agora a versão com HOFs 
const resultadoAposta = (numApostado, numSorteado) => numApostado === numSorteado;

const resultadoSorteio = (numApostado, callback) => {
    const numSorteado = Math.ceil(Math.random() * ((5 - 1) + 1));
    return callback(numApostado, numSorteado) ? 'Tente novamente' : 'Parabéns você ganhou';
};

console.log(resultadoSorteio(1, resultadoAposta));