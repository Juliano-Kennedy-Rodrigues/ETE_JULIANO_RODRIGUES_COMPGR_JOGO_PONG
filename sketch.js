var nivelDeDificuldade = Number(window.prompt("Escolha um nível de dificuldade. Ex: 5"));

var corTabuleiro = "#1F8340";
var corBolinha = 0;

var xBolinha = 300;
var yBolinha = 200;
var dBolinha = 20;

var velX =  nivelDeDificuldade;
var velY =  nivelDeDificuldade;

var largura = 600;
var altura = 400;

function setup() {
  createCanvas(largura, altura);
}
//***********
function criarTabuleiro(corTabuleiro){
    background(corTabuleiro);
}
//*********
function criarBolinha(){
    circle(xBolinha, yBolinha, dBolinha);
    fill(corBolinha);
}
//*************
function movimentarBolinha(){
  xBolinha = xBolinha + velX;
  yBolinha = yBolinha + velY;
}
//********
function colisaoBolinha(){
    if((xBolinha >  600 - (dBolinha/2)) || (xBolinha < (dBolinha/2))){
    velX = -1 * velX;
  }
    if((yBolinha >  400 - (dBolinha/2)) || yBolinha < (dBolinha/2)){
    velY = -1 * velY;
  }
}
//************
function draw() {
  criarTabuleiro(corTabuleiro);
  criarBolinha();
  movimentarBolinha();
  colisaoBolinha();
  
}