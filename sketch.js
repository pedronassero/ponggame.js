//caracteristicas da bolinha
let xBolinha = 200;
let yBolinha = 200;
let diametro = 30;
let raio = 13;

//velocidade da bolinha
let velocidadeX = 5;
let velocidadeY = 5;

//caracteristicas da raquete
let xRaquete = 15;
let yRaquete = 170;
let comprimentoRaquete = 10;
let alturaRaquete = 70;

//caracteristicas da raquete oponente
let xRaqueteOponente = 575;
let yRaqueteOponente = 175;
let comprimentoRaqueteOponente = 10;
let alturaRaqueteOponente = 70;
let velocidadeYOponente;

let colidiu = false;

//placar
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  mostraBolinha();
  movimentoBolinha();
  colisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaquete();
  movimentoRaqueteOponente();
  //colisaoRaquete();
  colisaoRaqueteLib(xRaquete, yRaquete);
  colisaoRaqueteLib(xRaqueteOponente, yRaqueteOponente);
  mostraPlacar();
  pontos();
  bolinhaPresa();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro)
}

function movimentoBolinha() {
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}

function colisaoBorda() {
   if (xBolinha > width - raio|| xBolinha < raio) {
    velocidadeX *= -1;
  }

  if (yBolinha > height - raio || yBolinha < raio) {
    velocidadeY *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete);
  
}

function movimentoRaquete() {
  if (keyIsDown(87)) {
    yRaquete += -4;
  } else if (keyIsDown(83)) {
    yRaquete += 4;
  }
}

function movimentoRaqueteOponente() {
   if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente += -4;
  } else if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 4;
  }
}

function colisaoRaquete() {
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
    velocidadeX *= -1;
  }
}

function colisaoRaqueteLib(x, y) {
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeX *= -1;
  }
}

function mostraPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(0, 0, 255));
  rect(150, 10, 40, 20);
  fill(255);
  text (meusPontos, 170, 26);
  fill(color(255, 0, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text (pontosOponente, 470, 26);
}

function pontos() {
  if (xBolinha > 585) {
    meusPontos += 1;
  }
  if (xBolinha < 15) {
    pontosOponente += 1;
  }
}

function bolinhaPresa() {
  if (xBolinha - raio < 0) {
    xBolinha = 28;    
  }

}
