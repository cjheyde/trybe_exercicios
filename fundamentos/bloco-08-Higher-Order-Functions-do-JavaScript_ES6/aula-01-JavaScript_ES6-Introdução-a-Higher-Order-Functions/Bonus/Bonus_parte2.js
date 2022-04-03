const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };
  
  const danoDragao = (dragon) =>
    Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
  
  const danoWarrior = (warrior) =>
    Math.floor(
      Math.random() *
        (warrior.strength * warrior.weaponDmg - warrior.strength + 1) +
        warrior.strength
    );
  
  const danoManaMago = (mage) => {
    const dano = Math.floor(
      Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) +
        mage.intelligence
    );
    const mana = 15;
    if (mage.mana < mana) {
      dano = "Não possui mana suficiente";
      mana = 0;
    }
    return { dano: dano, mana: mana };
  };

// Agora que você já possui a implementação das 
// funções relativas aos três exercícios anteriores, 
// passe-as como parâmetro para outras funções que 
// irão compor um objeto gameActions . O objeto será 
// composto por ações do jogo e cada ação é por 
// denifição uma HOF , pois neste caso, são funções 
// que recebem como parâmetro outra função.

const gameActions = {
    // Crie as HOFs neste objeto.


//   1 - Crie a primeira HOF que compõe o objeto gameActions . 
//   Ela será a função que simula o turno do personagem warrior . 
//   Esta HOF receberá como parâmetro a função que calcula o dano 
//   deferido pelo personagem warrior e atualizará os healthPoints 
//   do monstro dragon . Além disto ela também deve atualizar o 
//   valor da chave damage do warrior .

// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será 
// a função que simula o turno do personagem mage . Esta HOF receberá
//  como parâmetro a função que calcula o dano deferido pelo personagem
//   mage e atualizará os healthPoints do monstro dragon . Além disto
//    ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a 
// função que simula o turno do monstro dragon . Esta HOF receberá como
//  parâmetro a função que calcula o dano deferido pelo monstro dragon
//   e atualizará os healthPoints dos personagens mage e warrior . 
//   Além disto ela também deve atualizar o valor da chave damage do 
//   monstro.

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto 
// battleMembers atualizado e faça um console.log para visualizar o 
// resultado final do turno.

};
