// 1 - Crie uma função que retorne a string 'Acordando!!' ;
function acaoAcordar() {
  console.log("Acordando!!");
}
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
function acaoCafe() {
    console.log("Bora tomar café!!");
  }
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
function acaoDormir() {
    console.log("Partiu dormir!!");
  }
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função
// para que imprima no console o resultado da execução das funções que você criou
// nos exemplos anteriores.
function doingThings(callback){
    callback();
}

doingThings(acaoAcordar);
doingThings(acaoCafe);
doingThings(acaoDormir);