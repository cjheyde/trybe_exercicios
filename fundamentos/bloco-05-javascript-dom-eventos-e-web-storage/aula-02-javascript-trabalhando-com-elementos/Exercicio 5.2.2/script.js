// 1.Acesse o elemento elementoOndeVoceEsta .
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// 2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "red";

// 3.Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
// Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilho = (elementoOndeVoceEsta.firstElementChild.innerText =
  "primeiro filho do filho do elemento elementoOndeVoceEsta");

// 4.Acesse o primeiroFilho a partir de pai .
let primeiroFilho2 = pai.firstElementChild;

// 5.Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let primeiroFilho3 = elementoOndeVoceEsta.previousElementSibling;

// 6.Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let textElement = elementoOndeVoceEsta.nextSibling;

// 7.Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8.Agora acesse o terceiroFilho a partir de pai .1.
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
