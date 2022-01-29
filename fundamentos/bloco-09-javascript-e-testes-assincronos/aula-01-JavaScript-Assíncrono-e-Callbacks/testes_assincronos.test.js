test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  });

//   execute o comando npm test na sua máquina para ver! Como o setTimeout é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase "Deveria falhar!" sequer aparece no console.
// Para que o Jest espere a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.
// Vamos reescrever o teste chamando a callback done após a asserção para indicar que o teste acabou: O termo asserção é a verificação realizada pelo Jest para saber se um valor atende alguma condição

// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     }, 500);
//   });

// Apesar do código acima parecer correto, irá falhar com uma mensagem de timeout. O motivo é que quando uma asserção (verificação) falha, a exceção é lançada, ou seja, algo inesperado aconteceu. Dessa forma, o fluxo é interrompido antes que a instrução done() seja executada. Para resolver este problema podemos colocar um bloco try/catch em volta da nossa asserção. Enquanto o try tenta executar a função no seu escopo com sucesso, o catch "captura" o erro, chamando a callback done :

// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       try {
//         expect(10).toBe(5);
//         console.log('Deveria falhar!');
//         done();
//       } catch (error) {
//         done();
//       }
//     }, 500);
//   });

