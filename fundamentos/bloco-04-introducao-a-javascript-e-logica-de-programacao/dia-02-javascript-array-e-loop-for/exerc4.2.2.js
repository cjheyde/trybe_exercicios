// Procure o índice do valor "Portfólio" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio;

for (let index = 0; index < menu.length; index ++) {
    if (menu[index] === "Portfólio") {
        indexOfPortfolio = index;
    }
    else {
        indexOfPortfolio = "Não existe esse dado no Array"
    }
    console.log(menu[index]);
}

console.log(indexOfPortfolio);
