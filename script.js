let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.getElementsByClassName("blue");
const green = document.getElementsByClassName("green");
const red = document.getElementsByClassName("red");
const yellow = document.getElementsByClassName("yellow");

// Cria ordem aleatoria das cores
let shuffledOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

// Acende a proxima cor
let lightColor = (element, number) => {
  time = time * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

// Verifica os botões clicados
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você ganhou! Iniciando próxima rodada...`);
    nextLevel();
  }
};

// Função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");

  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
  });

  checkOrder();
};
