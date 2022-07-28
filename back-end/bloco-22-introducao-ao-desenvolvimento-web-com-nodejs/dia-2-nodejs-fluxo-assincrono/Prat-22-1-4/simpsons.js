const fs = require('fs').promises;

function personagemNome() {
    fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      const simpsons = JSON.parse(fileContent);
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

      strings.forEach((string) => console.log(string));
    });
}


async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);

    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

    if (!chosenSimpson) {
      /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
        * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
        * tendo como motivo o que passarmos para o `throw`.
        * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
        */
      throw new Error('id não encontrado');
    }
  
  return chosenSimpson;
}

function alteraSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);
const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

}

async function lerSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id))); // aqui convertemos o ID pra número, já que ele está salvo no JSON como string

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// }
}

function addPersonagem() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

function substituiPersonagem() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim: 
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

async function main() {
  // const simpson = await getSimpsonById(1);
  // console.log(simpson);
  // alteraSimpsons();
  addPersonagem();
}

main();