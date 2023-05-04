var canvas;
var backgroundImage, car1_img, car2_img, track;

//variáveis para imagens dos prêmios
var fuelImage, powerCoinImage;

//var para grupos dos prêmios
var fuels, powerCoins;

//variáveis para imagens de obstáculos 
var obstacle1Image, obstacle2Image;

//criar var para o grupos de obstáculos, aluno


var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  //carregamento das imagens aula 40
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");

  //--------ativar códigos------//
  /*obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");*/
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
