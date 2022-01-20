const parque = [
    {nome: 'graveto', tamanho: 'grande'},
    {nome: 'graveto', tamanho: 'médio'},
    {nome: 'garrafa pet', tamanho: 'pequeno'},
    {nome: 'graveto', tamanho: 'médio'},
    {nome: 'pacote de cheetos', tamanho: 'pequeno'},
    {nome: 'graveto', tamanho: 'grande'},
    {nome: 'chinelo', tamanho: 'médio'},
    {nome: 'graveto', tamanho: 'pequeno'},
    {nome: 'graveto', tamanho: 'médio'},
];

const doguinho = (itemPraBuscar) => itemPraBuscar.nome === 'graveto';

//os comandos .find e .filter >>SÓ FUNCIONAM COM ARRAYS<<

//Faz o doguinho buscar um único graveto.
console.log(parque.find(doguinho));

//Faz o doguinho buscar todos os gravetos do parque.
console.log(parque.filter(doguinho));