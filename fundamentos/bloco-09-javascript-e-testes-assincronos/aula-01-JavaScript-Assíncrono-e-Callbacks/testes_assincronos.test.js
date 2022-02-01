// test('Não deveria passar!', () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//     }, 500);
//   });

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

// Estamos quase lá... O código acima irá gerar um falso-positivo. O motivo é que não estamos passando nenhuma ação a ser realizada quando o erro acontece e "encerramos" nosso teste com o done() sem lançar nenhum erro, dessa forma o teste é interpretado como "correto". Para resolver, podemos passar o parâmetro de erro para o catch . Dessa forma, caso nosso try não consiga executar o código dentro dele, cairá no catch , que vai pegar esse erro e vai encerrar nosso teste lançando um erro.

// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//       try {
//         expect(10).toBe(5);
//         console.log('Deveria falhar!');
//         done();
//       } catch (error) {
//         done(error); // Alteramos esta linha
//       }
//     }, 500);
//   });

// Agora sim, nosso teste falhou! Isso significa que você conseguiu testar com sucesso a callback.
// Vamos a mais um exemplo para fixação, desta vez você irá implementar uma função que espera um tempo e retorna a soma de dois números:

const asyncSum = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500);
  };
  
  test('Testando asyncSum, soma 5 mais 10', (done) => {
    asyncSum(5, 10, (result) => {
      try {
        expect(result).toBe(15);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

// Quando estiver realizando testes, é muito importante verificar se os resultados exibidos não são falso-positivos. No exemplo acima, em que o teste está passando, experimente mudar a implementação da função asyncSum para que retorne valores incorretos e verifique se o teste irá falhar. Por exemplo, se mudarmos os resultado para ser a + b + 1 o teste falha dizendo que esperava 15 , mas recebeu 16 .