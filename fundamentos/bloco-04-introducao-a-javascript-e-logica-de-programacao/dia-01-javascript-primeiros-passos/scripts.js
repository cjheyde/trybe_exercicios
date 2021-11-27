//Aprendendo a declarar variáveis
//const myName = "Carla Heyde";
//const birthCity = "São Paulo - SP";
//let birthYear = 1969;

//console.log(myName);
//console.log(birthCity);
//console.log(birthYear);
//console.log(myName,",",birthCity,",",birthYear);

//birthYear = 2030; 
//console.log(birthYear);


//usando o typeof para descobrir o tipo da variavel
//let patientId = "50";
//let isEnrolled = true;
//const patientInfo = {
  //firstName: 'Ana',
  //lastName: 'Santos',
//};
//const patientEmail = 'ana@email.com';

//console.log(typeof patientId);
//console.log(typeof patientAge);


//calculo no console log
//let base = 5;
//let height = 8;

//console.log(base, height);

//let area = base * height;
//console.log(area);

//let perimeter = 2*base + 2*height;

//console.log(perimeter);


//IF&Else
//const notaDesafioTecnico = 48;
//if (notaDesafioTecnico >= 80) {
  //  console.log("Parabéns, você foi aprovada(o)!");
// }
// else if (notaDesafioTecnico >= 60) {
//     console.log("Você está na nossa lista de espera");
// }
// else console.log("Você foi reprovada(o)");


// Operador lógico && AND
// const currentHour = 4;
// let message = "";

// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir";
// }
// else if (currentHour >= 18) {
//     message = "Rango da noite, vamos jantar :D";
// }
// else if (currentHour >= 14) {
//     message = "Vamos fazer um bolo pro café da tarde?";
// }
// else if (currentHour >= 11) {
//     message = "Hora do almoço!!!";
// }
// else if (currentHour >= 4) {
//     message = "Hmmm, cheiro de café recém passado";
// }

// console.log(message);


// Operado Lógico - || OR OU
let weekDay = "sabado";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
    console.log("FINALMENTE, descanso merecido UwU");
}


// Switch e Case
// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
// A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default .
