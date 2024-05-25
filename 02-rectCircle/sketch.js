// Ejemplo intermedio de colisión 2D con rectángulo y círculo
// ejemplo original: https://editor.p5js.org/simontiger/sketches/S1kfupErZ
// ´biblioteca: https://github.com/bmoren/p5.collide2D
/*
collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
************************************************************
Colisión de rectángulo a círculo en 2D. Asume rectMode(CORNER) && ellipseMode(CENTER).
*/

let colisiona = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  colisiona = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);

  noStroke();
  fill(color("black"));

  // evalúa si colisiona es true
  if (colisiona) {
    fill(color("red"));
  } else {
    fill(color("black"));
  }

  // dibuja rectangulo
  rect(200, 200, 100, 150);

  // dibuja circulo
  fill(color("black"));
  ellipse(mouseX, mouseY, 100, 100);

  print("¿Está colisionando? " + colisiona);

  // Use vectors as input.
  //let mouse = createVector(mouseX, mouseY);
  //let rect_start = createVector(200, 200);
  //let rect_size = createVector(100, 150);
  //let radius = 100;
  //colisiona = collideRectCircleVector(rect_start, rect_size, mouse, radius);

  //adds visual feedback when hit occures
  //added to all examples
  //stroke(colisiona ? color("red") : 0);
}
