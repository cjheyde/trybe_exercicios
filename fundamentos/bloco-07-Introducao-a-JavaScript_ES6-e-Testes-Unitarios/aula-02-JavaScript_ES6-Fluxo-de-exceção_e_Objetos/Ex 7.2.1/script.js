const sum = (value1, value2) => value1 + value2;

//  chame a função com dois parâmetros numéricos (por exemplo, 2 e 3). 
// Não esqueça do console.log para que seja possível ver o retorno.

// console.log(sum(2, 3));

console.log(sum(2, '3')); // resultado: 23 o primeiro parâmetro foi 
// convertido para uma string , e a operação realizada foi uma 
// concatenação de strings através do sinal de + .

// Vamos adicionar uma condicional que impede a pessoa usuária de 
// quebrar a sua calculadora.

const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));

  // Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw :
  const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));

  // melhor opcao

  const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3'));
