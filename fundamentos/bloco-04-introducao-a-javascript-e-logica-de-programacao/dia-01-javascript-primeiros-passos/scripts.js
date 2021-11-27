//const myName = "Carla Heyde";
//const birthCity = "São Paulo - SP";
//let birthYear = 1969;

//console.log(myName);
//console.log(birthCity);
//console.log(birthYear);
//console.log(myName,",",birthCity,",",birthYear);

//birthYear = 2030; 
//console.log(birthYear);

//let patientId = "50";
//let isEnrolled = true;
//const patientInfo = {
  //firstName: 'Ana',
  //lastName: 'Santos',
//};
//const patientEmail = 'ana@email.com';

//console.log(typeof patientId);
//console.log(typeof patientAge);

//let base = 5;
//let height = 8;

//console.log(base, height);

//let area = base * height;
//console.log(area);

//let perimeter = 2*base + 2*height;

//console.log(perimeter);

//const notaDesafioTecnico = 48;
//if (notaDesafioTecnico >= 80) {
  //  console.log("Parabéns, você foi aprovada(o)!");
// }
// else if (notaDesafioTecnico >= 60) {
//     console.log("Você está na nossa lista de espera");
// }
// else console.log("Você foi reprovada(o)");

const currentHour = 4;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11) {
    message = "Hora do almoço!!!";
}
else if (currentHour >= 4) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);
