function randomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

function callpraticaHum() {
  /* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber);
  console.log(randomNumbers);

  return randomNumbers;
}

function praticaHum(par1, par2, par3) {

  return new Promise((resolve, reject) => {
    if (typeof par1 !== 'number' || typeof par2 !== 'number' || typeof par3 !== 'number') {
      return reject(new Error('Informe apenas números'));
    }

  const result = (a + b) * c;

  if (result < 50) {
    return reject(new Error('Valor muito baixo'));
  }

  resolve(result);
  });
}

praticaHum(...callpraticaHum)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
