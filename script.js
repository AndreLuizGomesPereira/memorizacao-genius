let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");

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
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 500);
  setTimeout(() => {
    element.classList.remove("selected");
  }, number);
};

// Verifica os botões clicados
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
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
    checkOrder();
  }, 250);
};

// Função que retorna o elemento da cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

// Função para proximo nivel do jogo
let nextLevel = () => {
  score++;
  shuffledOrder();
};

// Função para perder o jogo
let gameOver = () => {
  alert(
    `Pontuação: ${score}\n Você perdeu! Clique em OK para reiniciar o jogo.`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

// Função para iniciar o jogo
let playGame = () => {
  alert("Bem vindo ao Genius!\n Clique em OK para iniciar o jogo.");
  score = 0;

  nextLevel();
};


// Eventos de cliques para as cores
green.onclick = () => {
  click(0);
};

red.onclick = () => {
  click(1);
};

yellow.onclick = () => {
  click(2);
};

blue.onclick = () => {
  click(3);
};


// Inicio do jogo
playGame();
