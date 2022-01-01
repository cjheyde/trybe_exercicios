/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 
 (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

const visao = document.getElementsByTagName("p")[0].innerText =
  "Em 2 anos estarei trabalhando como Desenvolvedora Web pleno, na Alemanha, ganhando " + 
  "muito bem em Euros, e sustentando toda a minha família";

const autoria = document.getElementsByTagName("p")[2].innerText = "CJHeyde";

// let mainContent = document.getElementsByTagName("main-content").style.background-color = "yellow";

const textoH1 = document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";