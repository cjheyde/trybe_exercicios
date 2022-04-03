// 3. Faça um programa que retorne o maior de três números. 
// Defina no começo do programa três constantes com os valores que serão comparados.

let a = 5;
let b = 5;
let c = 25;

if (a > b && b > c) {
    console.log(a, "é o maior número");
}
else if (a === b && b === c) {
    console.log("todos os números são iguais");
}
else if (a > b && b < c && a > c) {
    console.log(a, "é o maior número");
}
else if (a > b && b < c && a < c) {
    console.log(c, "é o maior número");   
}
else if (a === b && b > c) {
    console.log(a, "é o maior número");
}
else if (a === b && b < c) {
    console.log(c, "é o maior número");
}
else if (a < b && b > c) {
    console.log(b, "é o maior número");
}
else if (a < b && b < c) {
    console.log(c, "é o maior número");
}
else {
    console.log("verificar a lógica");
}